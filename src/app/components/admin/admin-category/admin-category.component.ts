import { ServerService } from './../../../server-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  category: any;
  cid: any;
  editMode = false;
  message: string;
  allVisible = [
    { status: true},
    { status: false}
  ];

  categoryForm = this.fb.group({
    name: ['', Validators.required],
    visible: [true, Validators.required],
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private adminService: AdminService,
              private serverService: ServerService,
              private toast: ToastService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.cid = params.cid || null;
      this.editMode = this.cid;

      if (this.editMode) {
        this.getCategory(this.cid);
      }
    });
  }

  getCategory(cid) {
    this.serverService.getCategory(cid)
    .subscribe(category => {
      this.categoryForm.patchValue(category);
    });
  }

  onSubmit() {
    const form = this.categoryForm.getRawValue();

    if (this.editMode) {
        this.adminService.updateCategory(this.cid, form).subscribe(resp => this.onCancel());
        this.sendUpdateMessage();
    } else {
        this.adminService.addNewcategory(form).subscribe(resp => this.onCancel());
        this.sendAddMessage();

    }
  }

  onCancel() {
    this.adminService.getCategories();
    this.router.navigate(['/admin/categories']);
  }

  sendAddMessage() {
    this.toast.sendMessage('You successfully added a new category');
  }

  sendUpdateMessage() {
    this.toast.sendMessage('You successfully updated a category');
  }
}

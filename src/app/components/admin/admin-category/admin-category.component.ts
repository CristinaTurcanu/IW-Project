import { ServerService } from './../../../server-service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-category',
  templateUrl: './admin-category.component.html',
  styleUrls: ['./admin-category.component.css']
})
export class AdminCategoryComponent implements OnInit {
  category: any;
  cid: any;
  editMode = false;
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
              private serverService: ServerService) {}

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
    } else {
      this.adminService.addNewcategory(form).subscribe(resp => this.onCancel());
    }
  }

  onCancel() {
    this.adminService.getCategories();
    this.router.navigate(['/admin/categories']);
  }

}

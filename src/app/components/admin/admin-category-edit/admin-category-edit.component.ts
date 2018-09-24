import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from './../admin.service';
import { ServerService } from './../../../server-service';
import { ICategory } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.css']
})
export class AdminCategoryEditComponent implements OnInit {
  category;
  pageTitle = 'Edit category';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService,
              private adminService: AdminService) { }

  ngOnInit() {
    const cid = this.route.snapshot.paramMap.get('cid');
    this.getCategory(cid);
  }

  getCategory(cid) {
    this.serverService.getCategory(cid)
    .subscribe(category => this.category = category);
  }

  updateCategory(category: ICategory) {
    alert('Do you want to update this category?');
    this.adminService.updateCategory(category.id, category);
    this.adminService.getCategories();
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../../categories'], {relativeTo: this.route});
  }
}

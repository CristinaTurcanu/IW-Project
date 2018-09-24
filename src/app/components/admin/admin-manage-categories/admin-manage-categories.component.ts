import { AdminService } from './../admin.service';
import { ICategory } from './../../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './../../../server-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-manage-categories',
  templateUrl: './admin-manage-categories.component.html',
  styleUrls: ['./admin-manage-categories.component.css']
})
export class AdminManageCategoriesComponent implements OnInit {
  apiCategories;

  constructor(private serverService: ServerService,
              private adminService: AdminService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      return this.apiCategories = categories;
    });
  }

  editCategory(category: ICategory) {
    this.router.navigate(['/admin', category.id, 'edit']);
  }

  deleteCategory(category: ICategory) {
    confirm('Are you sure you want to delete this category?');
    this.adminService.deleteCategory(category.id);
    this.adminService.getCategories();
  }

  addNewCategory() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

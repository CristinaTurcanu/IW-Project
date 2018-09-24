import { ServerService } from './../../../server-service';
import { FormGroup } from '@angular/forms';
import { AdminService } from './../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ICategory } from './../../../models/category.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-category',
  templateUrl: './admin-create-category.component.html',
  styleUrls: ['./admin-create-category.component.css']
})
export class AdminCreateCategoryComponent implements OnInit {
  newCategoryForm: FormGroup;
  category: ICategory;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private adminService: AdminService,
              private serverService: ServerService) { }

  ngOnInit() {
  }

  onSubmit(category: ICategory) {
    this.adminService.addNewcategory(category);
    this.onCancel();
  }

  onCancel() {
    this.adminService.getCategories();
    this.router.navigate(['../'], {relativeTo: this.route });
  }

}

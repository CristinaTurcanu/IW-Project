import { Product } from './../../../models/product.model';
import { AdminService } from './../admin.service';
import { ICategory } from './../../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './../../../server-service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { switchMap, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-manage-categories',
  templateUrl: './admin-manage-categories.component.html',
  styleUrls: ['./admin-manage-categories.component.css']
})
export class AdminManageCategoriesComponent implements OnInit {
  apiCategories;
  apiProducts;
  subscription: Subscription;

  constructor(private serverService: ServerService,
              private adminService: AdminService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.serverService.getCategories()
      .subscribe(categories => {
        return this.apiCategories = categories;
      });
  }

  getProducts(cid) {
    this.subscription = this.serverService.getProducts(cid)
      .subscribe(products => {
        return this.apiProducts = products;
      });
  }

  editCategory(category: ICategory) {
    this.router.navigate(['/admin', category.id, 'edit']);
  }

  deleteCategory(category: ICategory) {
    confirm('Are you sure you want to delete this category?');
    this.adminService.deleteCategory(category.id).pipe(
      switchMap(res =>  this.serverService.getCategories()),
      catchError(err => of(err))
    ).subscribe(categories => this.apiCategories = categories);
  }

  addNewCategory() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}

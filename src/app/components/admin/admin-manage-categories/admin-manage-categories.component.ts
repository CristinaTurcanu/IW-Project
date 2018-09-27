import { AdminService } from './../admin.service';
import { ICategory } from './../../../models/category.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ServerService } from './../../../server-service';
import { Component, OnInit } from '@angular/core';
import { switchMap, catchError } from 'rxjs/operators';
import { of, Subscription } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Sort } from '@angular/material';

@Component({
  selector: 'app-admin-manage-categories',
  templateUrl: './admin-manage-categories.component.html',
  styleUrls: ['./admin-manage-categories.component.css']
})
export class AdminManageCategoriesComponent implements OnInit {
  apiCategories;
  apiProducts;
  subscription: Subscription;
  sortedData;

  constructor(private serverService: ServerService,
              private adminService: AdminService,
              private router: Router,
              private route: ActivatedRoute,
              private modalService: NgbModal) {
  }

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

  addNewCategory() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  openConfirmation(content) {
    this.modalService.open(content, { centered: true });
  }

  deleteCategory(category: ICategory) {
    this.adminService.deleteCategory(category.id).pipe(
      switchMap(res =>  this.serverService.getCategories()),
      catchError(err => of(err))
    ).subscribe(categories => this.apiCategories = categories);
    this.modalService.dismissAll();
  }

  sortData(sort: Sort) {
    const data = this.apiCategories.slice();
    if (!sort.active || sort.direction === '') {
      this.apiCategories = data;
      return;
    }

    this.apiCategories = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id' : return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}

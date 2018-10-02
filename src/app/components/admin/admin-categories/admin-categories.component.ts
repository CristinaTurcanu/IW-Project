import { AdminService } from './../admin.service';
import { Router } from '@angular/router';
import { ServerService } from './../../../server-service';
import { Component, OnInit } from '@angular/core';
import { switchMap } from '../../../../../node_modules/rxjs/operators';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  category;
  apiCategories;
  apiProducts;

  constructor(private serverService: ServerService,
              private router: Router,
              private adminService: AdminService) {
  }

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      return this.apiCategories = categories;
  });

    this.adminService.currentCategories.pipe(
      switchMap(res => {
        return this.serverService.getCategories();
      })
    ).subscribe(res => this.apiCategories = res);
  }

  manageCategories() {
    this.router.navigate(['/admin/categories']);
  }
}

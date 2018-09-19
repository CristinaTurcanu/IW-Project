import { ServerService } from './../../../server-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  apiCategories;
  apiProducts;

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      return this.apiCategories = categories;
    });
  }

  getProducts(cid) {
    this.serverService.getProducts(cid)
      .subscribe(products => {
        return this.apiProducts = products;
      });
  }
}

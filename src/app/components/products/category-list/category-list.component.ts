import { ServerService } from '../../../server-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  apiProducts;
  apiCategories;

  // pageTitle = '';
  // message = 'were added to cart';

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      return this.apiCategories = categories;
    });
  }

  getProducts(cid) {
    this.serverService.getProducts(cid)
    .subscribe(products => this.apiProducts = products);
  }
}



import { ServerService } from './../../server-service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../../model/product.model';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {
  product: Product;
  products$;
  products;
  latest_products = [];

  constructor(private serverService: ServerService) { }

  ngOnInit() {
    this.getProducts();
  }
  getProducts() {
    this.serverService.getProducts(131)
    .subscribe(products => this.products$ = products);
    this.getRecentCreatedProducts(this.products$);
  }
  getRecentCreatedProducts(products) {
    const sorted_products = products.sort((a, b) => {
      return a.created_at > b.created_at;
      });
    this.latest_products = sorted_products.slice(0, 3);
    console.log(this.latest_products);
  }
}

import { Router } from '@angular/router';
import { Product } from './../../models/product.model';
import { ServerService } from '../../server-service';
import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [NgbCarouselConfig]
})
export class HomeComponent implements OnInit {
products;
latest_products;

  constructor(private serverService: ServerService,
              private route: Router) {
  }

  ngOnInit() {
  }
  // showProducts(latest_products) {
  //   this.serverService.getProducts(131)
  //     .subscribe(productsData => {
  //       this.products = productsData;
  //       const sorted_products = this.products.sort((a, b) => {
  //         return a.created_at < b.created_at;
  //       });
  //       this.latest_products = sorted_products.slice(0, 3);
  //       console.log(this.latest_products);
  //     });
  //   }
  showDetails(product) {
    this.route.navigate(['/products', product.furniture_category_id, product.id]);
  }
}

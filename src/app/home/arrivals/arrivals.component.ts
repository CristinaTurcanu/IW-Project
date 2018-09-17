import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../../model/product.model';


@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {
  product: Product;
  @Output() productReceived = new EventEmitter<Product[]>();

  constructor() {
    this.productReceived.emit();
  }

  ngOnInit() {
  }
}




  // showProducts() {
  //   this.serverService.getCategories()
  //   .subscribe(categories => this.categories$ = categories);
  //   console.log(this.categories$);

  //   Observable.zip(this.categories$.map(category => {
  //       this.serverService.getProducts(category.id);
  //   }))
  //   .subscribe(products => {
  //     this.products$ = [].concat.apply([], products);

  //   const sorted_products = this.products$.sort((a, b) => {
  //   return a.created_at > b.created_at;
  //   });
  //   this.latest_products = sorted_products.slice(0, 3);
  //   });
  // }

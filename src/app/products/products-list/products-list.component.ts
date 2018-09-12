import { Product } from './../../model/product.model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() product: any;
  @Output() productReceived = new EventEmitter<Product>();
  @Output() addedToCart = new EventEmitter<Product>();
  @Output() addedToWishlist = new EventEmitter<Product>();

  options = [];
  defaultOption: number;
  alllowAddToWishlist = false;

  constructor() { }

  ngOnInit() {
    this.options = [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ];
    this.defaultOption = 1;
  }

  onQuantitySelected(value: number) {
    this.product.quantity = +value;
  }

  getProduct(product) {
    this.productReceived.emit(product);
  }

  addToCart(product) {
    this.addedToCart.emit(product);
  }

  addToWishlist(product) {
    this.addedToWishlist.emit(product);
  }

}

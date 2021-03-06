import { Product } from '../../models/product.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart = {products: []};
  addToCart = true;
  totalQuantity: number;

  counterSource = new BehaviorSubject<number>(this.getTotalQuantity());
  currentCounterValue = this.counterSource.asObservable();

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || this.cart;
  }

  changeCounterValue(counterValue: number) {
    this.counterSource.next(counterValue);
  }

  getProducts() {
    return [...this.cart.products];
  }

  addProduct(product: Product) {
    for (const prod of this.cart.products) {
      if (prod.id === product.id) {
          this.addToCart = false;
          prod.quantity = +prod.quantity + +product.quantity;
      }
    }
    if (this.addToCart) {
      this.cart.products.push(product);
    }
    return this.updateCart();
  }

  getTotalQuantity() {
    this.totalQuantity = this.cart.products
    .reduce((total, prod) => {
      return +total + +prod.quantity;
    }, 0);
    return +this.totalQuantity;
  }

  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
​    return this.getProducts();
  }

  findProductIndex(product) {
    return this.cart.products.indexOf(product);
  }

  deleteProduct(product) {
    this.cart.products.splice(this.findProductIndex(product), 1);
    return this.updateCart();
  }
}

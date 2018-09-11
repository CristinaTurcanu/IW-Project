import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart = {products: []};

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || this.cart;
  }

  getProducts() {
    return [...this.cart.products];
  }
  addProduct(product: Product[]) {
    const prod = this.findProductIndex(product);
    this.cart.products.push(product);
    return this.updateCart();
  }
  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
​    return this.getProducts();
  }
  findProductIndex(product: Product[]) {
    return this.cart.products.indexOf(product);
  }

  deleteProduct(product: Product[]) {
    this.cart.products.splice(this.findProductIndex(product), 1);
    return this.updateCart();
  }
}

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
    this.cart.products.push(product);
    return this.updateCart();

  }
  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
​    return this.getProducts();
  }
  private findProductIndex(product: Product[]) {
    return this.cart.products.indexOf(product);
  }
  put(product, changes) {
    Object.assign(this.cart.products[this.findProductIndex(product)], changes);
    return this.updateCart();
  }
  deleteProduct(product: Product[]) {
    this.cart.products.splice(this.findProductIndex(product), 1);
    return this.updateCart();
  }
}

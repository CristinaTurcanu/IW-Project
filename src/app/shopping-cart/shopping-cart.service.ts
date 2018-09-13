import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  cart = {products: []};
  product: Product;
  addToCart = true;

  constructor() {
    this.cart = JSON.parse(localStorage.getItem('cart')) || this.cart;
  }

  getProducts() {
    return [...this.cart.products];
  }
  addProduct(product: Product) {
    for (const prod of this.cart.products) {
      if (prod.id === product.id) {
          this.addToCart = false;
          prod.quantity += product.quantity;
      }
    }
    if (this.addToCart) {
      this.cart.products.push(product);
    }
    return this.updateCart();
  }
  updateCart() {
    localStorage.setItem('cart', JSON.stringify(this.cart));
​    return this.getProducts();
  }

  findProductIndex(product) {
    return this.cart.products.indexOf(product);
  }

  deleteProduct(id: number) {
    this.cart.products = this.cart.products
      .filter(product => product.id !== id);
  }
}

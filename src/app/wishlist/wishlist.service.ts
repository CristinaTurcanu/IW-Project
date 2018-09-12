import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist = {products: []};
  allowToAdd = true;
  prod: Product;
  product: Product;

  constructor() {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || this.wishlist;
  }

  getProducts() {
    return [...this.wishlist.products];
  }
  addProduct(product: Product) {
    let prod = this.product;
    for (prod of this.wishlist.products) {
      if (prod.id === product.id) {
        this.allowToAdd = false;
      }
    }
    if (this.allowToAdd) {
      this.wishlist.products.push(product);
    }
    return this.updateWishlist();
  }
  updateWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    return this.getProducts();
  }
  private findProductIndex(product: Product) {
    return this.wishlist.products.indexOf(product);
  }
  deleteProduct(id: number) {
    this.wishlist.products = this.wishlist.products
      .filter(product => product.id !== id);
    return this.wishlist.products;
  }
  // deleteProduct(product: Product) {
  //   this.wishlist.products.splice(this.findProductIndex(product), 1);
  //   return this.updateWishlist();
  // }
}

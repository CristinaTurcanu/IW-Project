import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  wishlist = {products: []};

  constructor() {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || this.wishlist;
  }

  getProducts() {
    return [...this.wishlist.products];
  }
  addProduct(product: Product[]) {
    this.wishlist.products.push(product);
    return this.updateWishlist();
  }
  updateWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    return this.getProducts();
  }
  private findProductIndex(product: Product[]) {
    return this.wishlist.products.indexOf(product);
  }
  deleteProduct(product: Product[]) {
    this.wishlist.products.splice(this.findProductIndex(product), 1);
    return this.updateWishlist();
  }
}

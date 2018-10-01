import { Injectable, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class WishlistService implements OnInit {
  wishlist = {products: []};
  allowToAdd = true;
  prod: Product;
  product: Product;

  constructor() {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist')) || this.wishlist;
  }

  ngOnInit() {}

  getProducts() {
    return [...this.wishlist.products];
  }

  addProduct(product: Product) {
    for (const prod of this.wishlist.products) {
      if (prod.id === product.id) {
        this.allowToAdd = false;
      }
    }
    if (this.allowToAdd) {
      product.quantity = 1;
      this.wishlist.products.push(product);
    }
    return this.updateWishlist();
  }

  updateWishlist() {
    localStorage.setItem('wishlist', JSON.stringify(this.wishlist));
    return this.getProducts();
  }

  findProductIndex(product: Product) {
    return this.wishlist.products.indexOf(product);
  }

  deleteProduct(product: Product) {
    this.wishlist.products.splice(this.findProductIndex(product), 1);
    return this.updateWishlist();
  }
}

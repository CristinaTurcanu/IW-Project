import { Product } from './../model/product.model';
import { WishlistService } from './wishlist.service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  wishlist = {products: []};
  product: Product;
  options = [];
  defaultOption: number;

  constructor(private wishService: WishlistService,
              private cartService: ShoppingCartService) {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
  }

  ngOnInit() {
    this.wishService.getProducts();
    this.options = [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ];
    this.defaultOption = 1;
  }
  addToCart(product) {
    this.cartService.addProduct(this.product);
  }
  deleteProduct(product) {
    this.wishService.deleteProduct(product.id);
    this.wishService.updateWishlist();
  }
}

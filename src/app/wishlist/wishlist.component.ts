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

  constructor(private wishService: WishlistService,
              private cartService: ShoppingCartService) {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
  }

  ngOnInit() {
    this.wishService.getProducts();
  }
  addToCart(product) {
    this.cartService.addProduct(product);

  }
  deleteProduct(product) {
    this.wishService.deleteProduct(product);
    this.wishService.updateWishlist();
  }

}

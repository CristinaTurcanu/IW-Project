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
  deleted = false;
  constructor(private wishService: WishlistService,
              private cartService: ShoppingCartService) {
    this.wishlist = JSON.parse(localStorage.getItem('wishlist'));
  }

  ngOnInit() {
    this.wishService.getProducts();
  }
  addToCart(product: Product) {
    this.cartService.addProduct(product);

  }
  deleteProduct(product) {
    document.getElementById(product.id).style.display = 'none';
    this.wishService.deleteProduct(product);
  }
}

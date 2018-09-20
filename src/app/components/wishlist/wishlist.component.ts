import { Product } from './../../models/product.model';
import { WishlistService } from './wishlist.service';
import { Component, OnInit, Input } from '@angular/core';
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

  newCounterValue() {
    this.cartService.getProducts();
    this.cartService.changeCounterValue(this.cartService.getTotalQuantity());
  }

  addToCart(product: Product) {
    this.cartService.addProduct(product);
    this.newCounterValue();
  }

  deleteProduct(product) {
    document.getElementById(product.id).style.display = 'none';
    this.wishService.deleteProduct(product);
  }
}

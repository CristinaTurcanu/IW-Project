import { destroyView } from '@angular/core/src/view/view';
import { Product } from './../model/product.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  cart = {products: []};
  product: Product[];

  constructor(private cartService: ShoppingCartService) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  ngOnInit() {
    this.cartService.getProducts();
  }

  deleteProduct(product) {
    this.cartService.deleteProduct(product);
    this.cartService.getProducts();
  }

}

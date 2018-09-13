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
  product: Product;
  totalSum = 0;

  constructor(private cartService: ShoppingCartService) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  ngOnInit() {
    this.cartService.getProducts();
    this.getTotalSum();
  }
  getTotalSum() {
    for (const prod of this.cart.products) {
      prod.total = prod.price * prod.quantity;
      this.totalSum += prod.total;
    }
  }
  onQuantitySelected($event) {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.totalSum = 0;
    this.getTotalSum();
  }
  deleteProduct(product) {
    this.cartService.deleteProduct(product.id);
    document.getElementById(product.id).style.display = 'none';
    this.cartService.updateCart();
  }
}

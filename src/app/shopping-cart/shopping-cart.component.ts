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
  totalSum;

  constructor(private cartService: ShoppingCartService) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  ngOnInit() {
    this.cartService.getProducts();
    this.getTotalSum();
  }
  getTotalSum() {
    this.totalSum = 0;
    for (const prod of this.cart.products) {
      prod.total = prod.price * prod.quantity;
      this.totalSum += prod.total;
    }
    return this.totalSum;
  }
  onQuantitySelected($event) {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getTotalSum();
  }
  deleteProduct(product) {
    this.cartService.deleteProduct(product.id);
    document.getElementById(product.id).style.display = 'none';
    this.totalSum -= (product.price * product.quantity);
    if (this.cart.products.length < 1) {
      return this.totalSum = 0;
    }
  }
}

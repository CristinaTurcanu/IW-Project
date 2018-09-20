import { Product } from '../../models/product.model';
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
  totalQuantity: number;

  constructor(private cartService: ShoppingCartService) {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  ngOnInit() {
    this.newCounterValue();

    this.cartService.getProducts();
    this.getTotalSum();
    this.cartService.currentCounterValue
      .subscribe(value => {
        return this.totalQuantity = value;
      });
  }

  newCounterValue() {
    this.cartService.changeCounterValue(this.getTotalQuantity());
  }

  getTotalQuantity() {
    this.totalQuantity = this.cart.products
      .reduce((total: number, prod) => {
        return total + +prod.quantity;
      }, 0);
      return +this.totalQuantity;
  }

  getTotalSum() {
    this.totalSum = this.cart.products
      .reduce((total, prod) => {
        return total + (prod.price * prod.quantity);
      }, 0);
  }

  onQuantitySelected($event) {
    localStorage.setItem('cart', JSON.stringify(this.cart));
    this.getTotalSum();
    this.getTotalQuantity();
    this.newCounterValue();
  }

  deleteProduct(product) {
    this.cartService.deleteProduct(product.id);
    this.cartService.updateCart();
    document.getElementById(product.id).style.display = 'none';
    // this.router.navigateByUrl('/reload');
    this.totalSum -= (product.price * product.quantity);
    this.totalQuantity -= product.quantity;
    if (this.cart.products.length < 1) {
      return this.totalSum = 0;
    }
  }
}

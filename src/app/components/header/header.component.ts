import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  navbarOpen = false;
  dropDownOpen = false;
  counter;

  constructor(private cartService: ShoppingCartService) {}

  ngOnInit() {
    this.cartService.getProducts();
    this.cartService.currentCounterValue
      .subscribe(value => {
        return this.counter = value;
      }
    );
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
  toggleUser() {
    this.dropDownOpen = !this.dropDownOpen;
  }
}

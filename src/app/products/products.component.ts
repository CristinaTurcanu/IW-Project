import { ShoppingCartService } from './../shopping-cart/shopping-cart.service';
import { Product } from './../model/product.model';
import { CategoryService } from './category-service';
import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: Product[];
  cart: any;
  categories$;
  products$;


  constructor(private categoryService: CategoryService,
              private cartService: ShoppingCartService,
              private wishService: WishlistService) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
    this.categoryService.getCategories()
      .subscribe();
  }
  getProducts(cid) {
    this.categoryService.getProducts(cid)
     .subscribe(product => this.products$ = product);
  }

  addToCart(product: Product[]) {
    this.cartService.addProduct(product);
  }
  changeQuantity($event) {
    console.log(event.target);
  }
  // selectOption(value: number) {
  //   const quantity = value;
  // }
  addToWishlist(product: Product[]) {
    this.wishService.addProduct(product);
  }
}

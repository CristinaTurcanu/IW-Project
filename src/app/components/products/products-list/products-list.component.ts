import { Product } from './../../../models/product.model';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { WishlistService } from './../../wishlist/wishlist.service';
import { ShoppingCartService } from './../../shopping-cart/shopping-cart.service';
import { ServerService } from './../../../server-service';
import { Router, ActivatedRoute } from '@angular/router';
import {assign, map, isEqual} from 'lodash';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, OnDestroy {
  product: Product;
  cid: number;
  apiProducts;
  subscription;
  pageTitle = '';
  message = 'were added to cart';
  counter: number;

  options = [
    {value: 1},
    {value: 2},
    {value: 3},
    {value: 4},
    {value: 5}
  ];
  defaultOption = 1;
  allowAddToWishlist = false;

  constructor(private serverService: ServerService,
              private cartService: ShoppingCartService,
              private wishService: WishlistService,
              private route: ActivatedRoute) {}

  ngOnInit() {
    let cid = this.route.snapshot.paramMap.get['cid'];
    this.subscription = this.route.params
      .subscribe(params => {
        cid = +params['cid'];
        this.getProducts(cid);
      });
  }

  getProducts(cid) {
    this.serverService.getProducts(cid)
      .subscribe(products => {
        return this.apiProducts = products;
        // this.apiProducts.map(prod => {
        //   prod.quantity = +this.defaultOption;
        // });
      });
  }

  newCounterValue() {
    this.cartService.getProducts();
    this.cartService.changeCounterValue(this.cartService.getTotalQuantity());
  }

  checkStatus(product: Product) {
    if (product.availability === 'Out of Stock' || product.availability === 'Not Available') {
      return true;
    }
  }

  selectFavoriteProduct(product) {
    const newEntity = assign(product, {favorite: !product.favorite});
    this.apiProducts = map(this.apiProducts, (entity) => {
      return !isEqual(product, entity) ? entity : newEntity;
    });
  }

  addToCart(product: Product) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    this.cartService.addProduct(product);
    this.pageTitle = product.quantity + ' piece(s) of ' +  product.name + ' ' + this.message;
    this.newCounterValue();
  }

  addToWishlist(product: Product) {
    product.quantity = 1;
    this.wishService.addProduct(product);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}

  // getProduct(product) {
  //   this.productReceived.emit(product);
  // }

  // addToCart(product) {
  //   this.addedToCart.emit(product);
  // }

  // addToWishlist(product) {
  //   this.addedToWishlist.emit(product);
  // }

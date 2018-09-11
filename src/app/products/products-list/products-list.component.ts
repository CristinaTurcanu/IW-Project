import { Product } from './../../model/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { WishlistService } from '../../wishlist/wishlist.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from '../category-service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() product: Product;

  constructor(private cartService: ShoppingCartService,
              private wishService: WishlistService,
              private router: ActivatedRoute,
              private categoryService: CategoryService) { }

  ngOnInit() {}

  getProduct() {
    console.log(this.product);
  }
  addToCart(product: Product[]) {
    this.cartService.addProduct(product);
  }
  addToWishlist(product: Product[]) {
    this.wishService.addProduct(product);
  }
}

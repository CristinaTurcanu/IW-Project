import { DetailsService } from './../details.service';
import { Product } from './../../model/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { WishlistService } from '../../wishlist/wishlist.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {
  @Input() product: {id: number, name: string, img: string, description: string, availability: string, color: string,
                    price: number, quantity: number};

  constructor(private cartService: ShoppingCartService,
              private wishService: WishlistService,
              private router: ActivatedRoute) { }

  ngOnInit() {}

  addToCart(product: Product[]) {
    this.cartService.addProduct(product);
  }
  addToWishlist(product: Product[]) {
    this.wishService.addProduct(product);
  }
}

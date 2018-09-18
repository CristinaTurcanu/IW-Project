import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product.model';
import { ServerService } from '../../server-service';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart/shopping-cart.service';
import { WishlistService } from '../wishlist/wishlist.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product: {};
  products$;
  categories$;
  pageTitle = '';
  message = 'were added to cart';

  constructor(private serverService: ServerService,
              private cartService: ShoppingCartService,
              private wishService: WishlistService,
              private router: Router,
              private route: ActivatedRoute) {
    this.categories$ = serverService.getCategories();
  }

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => this.categories$ = categories);
    this.getProducts(131);
    this.route.params
      .subscribe(params => {
        let cid = +params['cid'];
        this.getProducts(cid);
      });
  }

  getProducts(cid) {
    this.serverService.getProducts(cid)
    .subscribe(products => this.products$ = products);
    this.router.navigate(['/products', cid]);
  }

  showDetails (product: Product) {
    this.router.navigate(['/products', product.furniture_category_id, product.id]);
  }

  addToCart (product: Product) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    this.cartService.addProduct(product);
    this.pageTitle = product.quantity + ' piece(s) of ' +  product.name + ' ' + this.message;
  }

  addToWishlist (product: Product) {
    product.quantity = 1;
    this.wishService.addProduct(product);
  }
}

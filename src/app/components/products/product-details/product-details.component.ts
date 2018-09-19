import { Product } from '../../../models/product.model';
import { ServerService } from '../../../server-service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  cid: number;
  fid: number;
  product: any;
  pageTitle = 'Product Detail';
  options = [];
  defaultOption: number;
  message = '';

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService,
              private cartService: ShoppingCartService) {}

  ngOnInit() {
    const cid = this.route.snapshot.paramMap.get('cid');
    const fid = this.route.snapshot.paramMap.get('fid');
    if (cid && fid) {
      this.getProduct(cid, fid);
    }
    this.options = [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5}
    ];
    this.defaultOption = 1;
  }
  getProduct(cid, fid) {
    this.serverService.getProduct(cid, fid).subscribe(
      product => this.product = product
    );
  }
  checkStatus() {
    if (this.product.availability === 'Out of Stock' || this.product.availability === 'Not Available') {
      return true;
    }
  }
  onQuantitySelected(value: number) {
    this.product.quantity = +value;
  }
  addToCart(product: Product) {
    if (!product.quantity) {
      this.product.quantity = 1;
    }
    this.cartService.addProduct(product);
    this.message = 'You added ' + this.product.quantity + ' piece(s)';
  }
}

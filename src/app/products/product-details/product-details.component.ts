import { CategoryService } from './../category-service';
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

  constructor(private route: ActivatedRoute,
              private router: Router,
              private categoryService: CategoryService,
              private cartService: ShoppingCartService) {}

  ngOnInit() {
    let cid = this.route.snapshot.paramMap.get('cid');
    let fid = this.route.snapshot.paramMap.get('fid');
    if (cid && fid) {
      cid = cid;
      fid = fid;
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
    this.categoryService.getProduct(cid, fid).subscribe(
      product => this.product = product
    );
  }
  onQuantitySelected(value: number) {
    this.product.quantity = +value;
  }
  addToCart() {
    this.cartService.addProduct(this.product);
  }
  onBack() {
    this.router.navigate(['/products']);
  }
}

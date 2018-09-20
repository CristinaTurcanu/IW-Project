import { ServerService } from './../../../server-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  @Input() apiProducts;
  @Input() product;
  subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService) {}

  ngOnInit() {
    let cid = this.route.snapshot.paramMap.get['cid'];
    this.subscription = this.route.params
      .subscribe(params => {
        cid = +params['cid'];
        this.getProducts(cid);
      });
  }
  getProducts(cid) {
    this.serverService.getProducts(cid).subscribe(
      products => {
      return this.apiProducts = products;
    });
  }
  editProduct(product: Product) {
    this.router.navigate(['/admin', product.furniture_category_id, product.id]);
  }

  addProduct() {
    this.router.navigate(['admin/new']);
  }
}

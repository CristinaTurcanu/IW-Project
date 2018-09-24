import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../server-service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {
  product;
  pageTitle = 'Edit product';
  allAvailability = [
    { status: 'In Stock'},
    { status: 'Limited Stock'},
    { status: 'Out of Stock'},
    { status: 'Not Available'},
  ];

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService,
              private adminService: AdminService) { }

  ngOnInit() {
    const cid = this.route.snapshot.paramMap.get('cid');
    const fid = this.route.snapshot.paramMap.get('fid');
    if (cid && fid) {
      this.getProduct(cid, fid);
    }
  }

  getProduct(cid, fid) {
    this.serverService.getProduct(cid, fid)
    .subscribe(product => this.product = product);
  }

  updateProduct(product: Product) {
    confirm('Do you want to update this product?');
    this.adminService.updateProduct(product.furniture_category_id, product.id, product);
    this.adminService.getProducts(product.furniture_category_id);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.route });
  }
}

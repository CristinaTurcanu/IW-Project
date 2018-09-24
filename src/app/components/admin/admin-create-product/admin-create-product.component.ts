import { ServerService } from './../../../server-service';
import { AdminService } from './../admin.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.css']
})
export class AdminCreateProductComponent implements OnInit {
  apiCategories;
  product: Product;
  pageTitle: 'You are creating';
  newProductForm: FormGroup;
  allAvailability = [
    { status: 'In Stock'},
    { status: 'Limited Stock'},
    { status: 'Out of Stock'},
    { status: 'Not Available'},
  ];

  constructor(private router: Router,
              private route: ActivatedRoute,
              private adminService: AdminService,
              private serverService: ServerService) {
              }

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      return this.apiCategories = categories;
    });
  }

  onSubmit(product: Product) {
    this.adminService.addNewProduct(product.furniture_category_id, product);
    this.adminService.getProducts(product.furniture_category_id);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route });
  }

}

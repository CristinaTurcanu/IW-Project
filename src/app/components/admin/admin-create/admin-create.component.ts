import { ServerService } from './../../../server-service';
import { AdminService } from './../admin.service';
import { FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {
  apiCategories;
  product: Product;
  pageTitle: 'You are creating';
  newProductForm: FormGroup;

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

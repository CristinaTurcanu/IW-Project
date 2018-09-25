import { ServerService } from './../../../server-service';
import { AdminService } from './../admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-admin-create-product',
  templateUrl: './admin-create-product.component.html',
  styleUrls: ['./admin-create-product.component.css']
})
export class AdminCreateProductComponent implements OnInit {
  apiCategories;
  apiProducts;
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

    this.newProductForm = new FormGroup({
      'category': new FormControl(null, Validators.required),
      'name': new FormControl(null, Validators.required),
      'description': new FormControl(null, Validators.required),
      'availability': new FormControl('In Stock', Validators.required),
      'color': new FormControl(null, Validators.required),
      'price': new FormControl(null, Validators.required),
      'imageUrl': new FormControl(null)
    });
  }

  onSubmit(product: Product) {
    console.log(this.newProductForm);
    this.adminService.addNewProduct(product.furniture_category_id, product);
    this.adminService.getProducts(product.furniture_category_id).pipe(
      switchMap(res =>  this.serverService.getProducts(product.furniture_category_id)),
      catchError(err => of(err))
    ).subscribe(products => this.apiProducts = products);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route });
  }

}

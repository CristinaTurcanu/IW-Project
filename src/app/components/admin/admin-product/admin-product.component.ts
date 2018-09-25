import { switchMap, catchError } from 'rxjs/operators';
import { ServerService } from './../../../server-service';
import { AdminService } from './../admin.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from './../../../models/product.model';
import { Component, OnInit } from '@angular/core';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  apiCategories;
  cid: number;
  fid: number;
  newProductForm: FormGroup;
  editMode = false;
  subscription: Subscription;
  allAvailability = [
    { status: 'In Stock'},
    { status: 'Limited Stock'},
    { status: 'Out of Stock'},
    { status: 'Not Available'},
  ];
  product: any;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private adminService: AdminService,
              private serverService: ServerService) {
              }

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      this.apiCategories = categories;
    });

    let cid = this.route.snapshot.paramMap.get['cid'];
    let fid = this.route.snapshot.paramMap.get['fid'];
    this.subscription = this.route.params
      .subscribe(params => {
        cid = +params['cid'];
        fid = +params['fid'];
        this.editMode = params['fid'] != null;
        this.getProduct(cid, fid);
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

  getProduct(cid, fid) {
    this.serverService.getProduct(cid, fid)
    .subscribe(product => {
      this.product = product;
      this.initForm();
    });
  }

  private initForm() {
    let category;
    let name = '';
    let description = '';
    let availability = '';
    let color = '';
    let price: number;
    let imageUrl = '';

    if (this.editMode) {
      category = this.product.furniture_category_id;
      name = this.product.name;
      description = this.product.description;
      availability = this.product.availability;
      color = this.product.color;
      price = this.product.price;
      imageUrl = this.product.imageUrl;
    }

    this.newProductForm = new FormGroup({
      'category': new FormControl(category),
      'name': new FormControl(name),
      'description': new FormControl(description),
      'availability': new FormControl(availability),
      'color': new FormControl(color),
      'price': new FormControl(price),
      'imageUrl': new FormControl(imageUrl)
    });
  }

  onSubmit(product: Product) {
    console.log(this.newProductForm);
    // this.adminService.addNewProduct(product.furniture_category_id, product);
    // this.adminService.getProducts(product.furniture_category_id).pipe(
    //   switchMap(res =>  this.serverService.getProducts(product.furniture_category_id)),
    //   catchError(err => of(err))
    // ).subscribe(products => this.apiProducts = products);
    this.onCancel();
  }

  onCancel() {
    this.router.navigate(['../../'], {relativeTo: this.route });
  }

}

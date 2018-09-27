import { switchMap, catchError } from 'rxjs/operators';
import { ServerService } from './../../../server-service';
import { AdminService } from './../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  apiCategories;
  apiProducts;
  product: any;
  cid: any;
  fid: any;
  editMode = false;
  message: string;
  allAvailability = [
    { status: 'In Stock'},
    { status: 'Limited Stock'},
    { status: 'Out of Stock'},
    { status: 'Not Available'},
  ];

  productForm = this.fb.group({
    furniture_category_id: ['', Validators.required],
    name: ['', Validators.required],
    description: ['', Validators.required],
    availability: ['In Stock', Validators.required],
    color: [''],
    price: ['', [Validators.required, Validators.pattern(/[+-]?([0-9]*[.])?[0-9]+/)]],
    imageUrl: ['']
  });

  constructor(private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute,
              private adminService: AdminService,
              private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      this.apiCategories = categories;
    });

    this.cid = this.route.snapshot.paramMap.get['cid'];
    this.fid = this.route.snapshot.paramMap.get['fid'];

    this.route.params
      .subscribe(params => {
        this.cid = params.cid;
        this.fid = params.fid || null;

        this.editMode = params.fid || null;

        if (this.editMode) {
          this.getProduct(this.cid, this.fid);
        }
        this.initForm();
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
    if (this.editMode) {
      this.productForm.patchValue(this.product);
    } else {
      this.productForm.get('furniture_category_id').setValue(this.cid);
    }
  }

  onSubmit() {
    const form = this.productForm.getRawValue();

    if (this.editMode) {
      this.message = 'You successfully updated the product';
      setTimeout(() => {
        this.adminService.updateProduct(this.cid, this.fid, form).subscribe(test => {
          this.router.navigate(['../../'], {relativeTo: this.route });
        });

        this.adminService.getProducts(this.cid).pipe(
          switchMap(res =>  this.serverService.getProducts(this.cid)),
          catchError(err => of(err))
        ).subscribe(products => this.apiProducts = products);
      }, 700);

    } else {
      this.message = 'You successfully added a new product';
      setTimeout(() => {
        this.adminService.addNewProduct(this.cid, form).subscribe(test => {
          this.router.navigate(['../'], {relativeTo: this.route });
        });

        this.adminService.getProducts(this.cid).pipe(
          switchMap(res =>  this.serverService.getProducts(this.cid)),
          catchError(err => of(err))
        ).subscribe(products => this.apiProducts = products);
      }, 700);
    }
  }

  onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route });
  }

}

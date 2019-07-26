import { switchMap, catchError } from 'rxjs/operators';
import { ServerService } from './../../../server-service';
import { AdminService } from './../admin.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { of } from 'rxjs';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.css']
})
export class AdminProductComponent implements OnInit {
  apiCategories;
  apiProducts;
  cid: any;
  fid: any;
  editMode = false;
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
              private serverService: ServerService,
              private toast: ToastService) {}

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
          // Edit form
          this.getProduct(this.cid, this.fid);
        } else {
          // Add form
          this.productForm.get('furniture_category_id').setValue(this.cid);
        }
      });
  }

  getProduct(cid, fid) {
    this.serverService.getProduct(cid, fid)
    .subscribe(product => {
      this.productForm.patchValue(product);
    });
  }

  onSubmit() {
    const form = this.productForm.getRawValue();

    if (this.editMode) {
        this.adminService.updateProduct(this.cid, this.fid, form).subscribe(test => {
          this.router.navigate(['../../'], {relativeTo: this.route });
        });
        this.getProducts();
        this.sendUpdateMessage();

    } else {
        this.adminService.addNewProduct(this.cid, form).subscribe(test => {
          this.router.navigate(['../'], {relativeTo: this.route });
        });
        this.getProducts();
        this.sendAddMessage();
    }
  }

  onCancel() {
    this.router.navigate(['/admin', this.cid], {relativeTo: this.route });
  }

  sendAddMessage() {
    this.toast.sendMessage('You successfully added a new product');
  }

  sendUpdateMessage() {
    this.toast.sendMessage('You successfully updated a product');
  }

  getProducts() {
    this.adminService.getProducts(this.cid).pipe(
      switchMap(res =>  this.serverService.getProducts(this.cid)),
      catchError(err => of(err))
    ).subscribe(products => this.apiProducts = products);
  }
}

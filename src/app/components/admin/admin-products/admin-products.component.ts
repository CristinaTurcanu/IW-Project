import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AdminService } from './../admin.service';
import { ServerService } from './../../../server-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from './../../../models/product.model';
import { Component, OnInit, Input } from '@angular/core';
import { switchMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { Sort } from '@angular/material';
import { ToastService } from '../toast.service';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  @Input() apiProducts;
  @Input() product;
  sortedData;
  subscription;
  message: string;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private serverService: ServerService,
              private adminService: AdminService,
              private modalService: NgbModal,
              private toast: ToastService) {
              }

  ngOnInit() {
    let cid = this.route.snapshot.paramMap.get['cid'];
    this.subscription = this.route.params
      .subscribe(params => {
        cid = +params['cid'];
        this.getProducts(cid);
      });
  }

  getProducts(cid) {
    this.serverService.getProducts(cid)
      .subscribe(products => {
        return this.apiProducts = products;
      });
  }

  editProduct(product: Product) {
    this.router.navigate(['/admin', product.furniture_category_id, product.id, 'edit']);
  }

  addProduct() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

  openConfirmation(content) {
    this.modalService.open(content, { centered: true });
  }

  deleteProduct(product: Product) {
    this.adminService.deleteProduct(product.furniture_category_id, product.id).pipe(
      switchMap(res =>  this.serverService.getProducts(product.furniture_category_id)),
      catchError(err => of(err))
    ).subscribe(products => this.apiProducts = products);
    this.modalService.dismissAll();
  }

  sortData(sort: Sort) {
    const data = this.apiProducts.slice();
    if (!sort.active || sort.direction === '') {
      this.apiProducts = data;
      return;
    }

    this.apiProducts = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id' : return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        default: return 0;
      }
    });

    function compare(a, b, isAsc) {
      return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
    }
  }
}

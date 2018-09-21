import { HttpClient } from '@angular/common/http';
import { ServerService } from './../../server-service';
import { Product } from './../../models/product.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  apiCategories;
  apiProducts;
  product;
  cid: number;
  categoryUrl = 'http://iw-internship.herokuapp.com/api/v1/furniture-categories/';

  constructor(private serverService: ServerService) {}

  getUpdatedProducts(cid) {
    this.serverService.getProducts(cid).subscribe(
      products => {
      return this.apiProducts = products;
    });
  }

  getProducts(cid) {
    this.serverService.getProducts(cid).subscribe(
      products => {
      return this.apiProducts = products;
    });
  }

  getProduct(cid, fid) {
    this.serverService.getProduct(cid, fid)
    .subscribe(product => this.product = product);
  }

  addNewProduct(cid, product: Product) {
    this.serverService.addProduct(cid, product)
      .subscribe(response => console.log(response));
  }

  saveChanges(cid, fid, product: Product) {
    this.serverService.updateProduct(cid, fid, product)
      .subscribe();
  }
  deleteProduct(cid, fid) {
    this.serverService.deteleProduct(cid, fid)
      .subscribe();
  }
}

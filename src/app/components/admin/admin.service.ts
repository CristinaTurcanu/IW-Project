import { ICategory } from './../../models/category.model';
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

  getCategories() {
  this.serverService.getCategories()
    .subscribe(categories => this.apiCategories = categories);
  }

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
      .subscribe();
  }

  updateProduct(cid, fid, product: Product) {
    this.serverService.updateProduct(cid, fid, product)
      .subscribe();
  }

  deleteProduct(cid, fid) {
    this.serverService.deteleProduct(cid, fid)
      .subscribe();
  }

  addNewcategory(category: ICategory) {
    this.serverService.addCategory(category)
      .subscribe();
  }

  updateCategory(cid, category: ICategory) {
    this.serverService.updateCategory(cid, category)
    .subscribe();
  }

  deleteCategory(cid) {
    this.serverService.deleteCategory(cid)
      .subscribe();
  }
}

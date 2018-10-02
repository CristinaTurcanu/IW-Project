import { BehaviorSubject } from 'rxjs';
import { ICategory } from './../../models/category.model';
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

  categoriesSource = new BehaviorSubject({});
  currentCategories = this.categoriesSource.asObservable();

  constructor(private serverService: ServerService) {
  }

  updateCategories(category) {
    this.categoriesSource.next(category);
  }

  getCategories() {
  this.serverService.getCategories()
    .subscribe(categories => this.apiCategories = categories);
  }

  getProducts(cid) {
    return this.serverService.getProducts(cid);
  }

  getProduct(cid, fid) {
    this.serverService.getProduct(cid, fid)
    .subscribe(product => this.product = product);
  }

  addNewProduct(cid, product: Product) {
    return this.serverService.addProduct(cid, product);
  }

  updateProduct(cid, fid, product: Product) {
    return this.serverService.updateProduct(cid, fid, product);
  }

  deleteProduct(cid, fid) {
    return this.serverService.deteleProduct(cid, fid);
  }

  addNewcategory(category: ICategory) {
    return this.serverService.addCategory(category);
  }

  updateCategory(cid, category: ICategory) {
    return this.serverService.updateCategory(cid, category);
  }

  deleteCategory(cid) {
    return this.serverService.deleteCategory(cid);
  }
}

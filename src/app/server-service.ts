import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServerService {
  apiCategories = 'http://iw-internship.herokuapp.com/api/v1/furniture-categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.apiCategories);
  }

  getCategory(cid) {
    return this.http.get(this.apiCategories + '/' + cid);
  }

  addCategory(category) {
    return this.http.post(this.apiCategories, category);
  }

  deleteCategory(cid) {
    return this.http.delete(this.apiCategories + '/' + cid);
  }

  updateCategory(cid, category) {
    return this.http.put(this.apiCategories + '/' + cid, category);
  }

  getProducts(cid) {
    return this.http.get(this.apiCategories + '/' + cid + '/' + 'furnitures');
  }

  getProduct(cid, fid) {
    return this.http.get(this.apiCategories + '/' + cid + '/' + 'furnitures/' + fid);
  }

  addProduct(cid, product) {
    return this.http.post(this.apiCategories + '/' + cid + '/furnitures', product);
  }

  updateProduct(cid, fid, product) {
    return this.http.put(this.apiCategories + '/' + cid + '/' + 'furnitures/' + fid, product);
  }

  deteleProduct(cid, fid) {
    return this.http.delete(this.apiCategories + '/' + cid + '/' + 'furnitures/' + fid);
  }


}

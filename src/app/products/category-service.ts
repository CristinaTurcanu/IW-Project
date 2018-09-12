import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiCategories = 'http://iw-internship.herokuapp.com/api/v1/furniture-categories';

  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.apiCategories);
  }
  getProducts(cid) {
    return this.http.get(this.apiCategories + '/' + cid + '/' + 'furnitures');
  }
  getProduct(cid, fid) {
    return this.http.get(this.apiCategories + '/' + cid + '/' + 'furnitures/' + fid);
  }
}

import { Product } from './../model/product.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

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
  getProduct(id: number): Observable<Product | undefined> {
    return this.getProducts(cid).pipe(
      map((products: Product[]) => products.find(p => p.id === id))
    );
  }
}

import { Product } from './../model/product.model';
import { Params, ActivatedRoute } from '@angular/router';
import { CategoryService } from './category-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  prod: any;
  products$;
  categories$;

  constructor(private categoryService: CategoryService,
              private route: ActivatedRoute) {
    this.categories$ = categoryService.getCategories();
  }

  ngOnInit() {
    this.categoryService.getCategories()
    .subscribe();
  }

  getProducts(cid) {
    this.categoryService.getProducts(cid)
    .subscribe(product => this.products$ = product);
  }
}

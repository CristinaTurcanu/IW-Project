import { CategoryService } from './category-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products$;
  categories$;

  constructor(private categoryService: CategoryService) {
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

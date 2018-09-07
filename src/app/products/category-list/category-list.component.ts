import { CategoryService } from './../category-service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() products$;
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

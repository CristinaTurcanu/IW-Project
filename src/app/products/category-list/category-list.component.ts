import { CategoryService } from './../category-service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() category: {name: string, id: number};
  products$;

  constructor(private categoryService: CategoryService) {}

  ngOnInit() {}

  getProducts(cid) {
    this.categoryService.getProducts(cid)
    .subscribe(product => this.products$ = product);
  }


}

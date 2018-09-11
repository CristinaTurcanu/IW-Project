import { CategoryService } from './../../category-service';
import { Product } from './../../../model/product.model';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() product: { id: number, name: string, price: number, description: string, color: string, availability: string };

  constructor(private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService) {
  }
  ngOnInit() {
      const param = this.route.snapshot.paramMap.get('id');
      if (param) {
        const id = +param;
        this.getProduct(id);
    }
  }
  getProduct(id: number) {
    this.categoryService.getProduct(id).subscribe(
      product => this.product = product
    );
    console.log(this.product);
  }
}

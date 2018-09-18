import { Product } from './../../models/product.model';
import { ServerService } from './../../server-service';
import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  products: Product[];
  apiCategories;
  apiProducts;

  constructor(private serverService: ServerService) {
    this.apiCategories = this.serverService.getCategories();
  }

  ngOnInit() {
  }
  getProducts(cid) {
    this.serverService.getProducts(cid)
      .subscribe(products => {
        return this.apiProducts = products;
      });
  }
}

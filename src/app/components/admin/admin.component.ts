import { Product } from './../../models/product.model';
import { ServerService } from './../../server-service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  apiCategories;
  products: Product[];

  constructor(private serverService: ServerService) {}

  ngOnInit() {
    this.serverService.getCategories()
    .subscribe(categories => {
      return this.apiCategories = categories;
    });
  }
}

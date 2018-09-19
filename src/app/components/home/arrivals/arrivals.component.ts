import { ServerService } from './../../../server-service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {
  products;
  latestProducts;
  @Output() productReceived = new EventEmitter();

  constructor(private serverService: ServerService) {
    this.showProducts(this.latestProducts);
  }

  ngOnInit() {
  }
  showProducts(latestProducts) {
  this.serverService.getProducts(131)
    .subscribe(productsData => {
      this.products = productsData;
      const sortedProducts = this.products.sort((a, b) => {
        return a.created_at < b.created_at;
      });
      this.latestProducts = sortedProducts.slice(0, 3);
    });
  }
  showDetails(latest) {
    this.productReceived.emit(latest);
  }

}


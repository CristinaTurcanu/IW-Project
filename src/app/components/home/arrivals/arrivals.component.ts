import { ServerService } from './../../../server-service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-arrivals',
  templateUrl: './arrivals.component.html',
  styleUrls: ['./arrivals.component.css']
})
export class ArrivalsComponent implements OnInit {
  products;
  latest_products;
  @Output() productReceived = new EventEmitter();

  constructor(private serverService: ServerService) {
    this.showProducts(this.latest_products);
  }

  ngOnInit() {
  }
  showProducts(latest_products) {
  this.serverService.getProducts(131)
    .subscribe(productsData => {
      this.products = productsData;
      const sorted_products = this.products.sort((a, b) => {
        return a.created_at < b.created_at;
      });
      this.latest_products = sorted_products.slice(0, 3);
    });
  }
  showDetails(latest) {
    this.productReceived.emit(latest);
  }

}


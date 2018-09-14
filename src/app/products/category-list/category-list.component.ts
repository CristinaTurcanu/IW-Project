import { ServerService } from '../../server-service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() category: {name: string, id: number};
  products$;

  constructor(private serverService: ServerService) {}

  ngOnInit() {}

  getProducts(cid) {
    this.serverService.getProducts(cid)
    .subscribe(product => this.products$ = product);
  }


}

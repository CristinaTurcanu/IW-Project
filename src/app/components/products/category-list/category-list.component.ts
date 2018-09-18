import { ActivatedRoute, Router, Params } from '@angular/router';
import { ServerService } from '../../../server-service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  @Input() category: {name: string, cid: number};
  products$;

  constructor(private serverService: ServerService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit() {
    this.category = {
      name: this.category.name,
      cid: +this.route.snapshot.params['cid']
    };
    this.route.params
      .subscribe(
        (params: Params) => {
          this.category.cid = params['cid'];
        }
      );
  }

  getProducts(cid) {
    this.serverService.getProducts(cid)
    .subscribe(product => this.products$ = product);
  }


}

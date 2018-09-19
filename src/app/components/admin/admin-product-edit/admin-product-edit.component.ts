import { Component, OnInit } from '@angular/core';
import { ServerService } from './../../../server-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-product-edit',
  templateUrl: './admin-product-edit.component.html',
  styleUrls: ['./admin-product-edit.component.css']
})
export class AdminProductEditComponent implements OnInit {
  product;
  pageTitle = 'Edit product';

  constructor(private route: ActivatedRoute,
              private serverService: ServerService) { }

  ngOnInit() {
    const cid = this.route.snapshot.paramMap.get('cid');
    const fid = this.route.snapshot.paramMap.get('fid');
    if (cid && fid) {
      this.getProduct(cid, fid);
    }
  }

  getProduct(cid, fid) {
    this.serverService.getProduct(cid, fid)
    .subscribe(product => this.product = product);
  }

}

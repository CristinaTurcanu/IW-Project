import { ServerService } from './../../../server-service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-categories',
  templateUrl: './admin-categories.component.html',
  styleUrls: ['./admin-categories.component.css']
})
export class AdminCategoriesComponent implements OnInit {
  @Input() category: {name: string, id: number};

  constructor() { }

  ngOnInit() {
  }
}

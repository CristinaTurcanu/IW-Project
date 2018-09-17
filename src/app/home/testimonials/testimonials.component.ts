import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {
  @Input() people: Array<any> = [];

  constructor() {
    this.people = [
      { name: 'John Barton', position: 'CTO & Founder', img: '../../assets/images/testimonials/ceo.jpg'},
      { name: 'Daniela Vebar', position: 'SEO & Analysist', img: '../../assets/images/testimonials/cto.jpg'},
      { name: 'Steve Fonsi', position: 'Designer', img: '../../assets/images/testimonials/designer.jpg'}
    ];
  }

  ngOnInit() {
  }

}

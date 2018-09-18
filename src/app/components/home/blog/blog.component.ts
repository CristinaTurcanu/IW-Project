import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  pageTitle = 'Top 3 topics on Blog';
  posts = [];

  constructor() {
    this.posts = [
      {subject: 'Design',
      title: 'Live better',
      date: 'Jun 12',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolores explicabo unde iure rem, laboriosam quaerat aut beatae tenetur voluptatibus dolorem facere quisquam. Lorem est'},
      {subject: 'Arhitecture',
      title: 'Just read it ',
      date: 'Aug 10',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolores explicabo unde iure rem, laboriosam quaerat aut beatae tenetur voluptatibus dolorem facere quisquam. Lorem est'},
      {subject: 'Design',
      title: 'Black Color',
      date: 'May 21',
      // tslint:disable-next-line:max-line-length
      content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum dolores explicabo unde iure rem, laboriosam quaerat aut beatae tenetur voluptatibus dolorem facere quisquam. Lorem est'}
    ];
  }

  ngOnInit() {
  }

}

import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-home-show-post',
  templateUrl: './home-show-post.component.html',
  styleUrls: ['./home-show-post.component.scss']
})
export class HomeShowPostComponent implements OnInit {

  @Input() timeLinePosts: Array<Post> = [];

  constructor() { }

  ngOnInit(): void {
  }

}

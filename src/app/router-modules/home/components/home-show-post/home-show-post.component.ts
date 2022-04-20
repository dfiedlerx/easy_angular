import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PostInteraction } from 'src/app/shared/models/post-interaction.model';
import { Post } from 'src/app/shared/models/post.model';

@Component({
  selector: 'app-home-show-post',
  templateUrl: './home-show-post.component.html',
  styleUrls: ['./home-show-post.component.scss']
})
export class HomeShowPostComponent implements OnInit {

  @Input() timeLinePosts: Array<Post> = [];
  @Output() newPostWithInteraction = new EventEmitter<PostInteraction>();

  constructor() { }

  ngOnInit(): void {
  }
}

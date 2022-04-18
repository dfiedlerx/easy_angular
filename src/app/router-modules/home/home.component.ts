import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/PostService/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allPosts : Array<Post> = [];

  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.allPosts = this.PostService.getAll();
  }

  getTimelinePosts() : Array<Post> {
    return this.allPosts;
  }

}

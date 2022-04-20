import { Component, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PostInteraction } from 'src/app/shared/models/post-interaction.model';
import { Post } from 'src/app/shared/models/post.model';
import { PostService } from 'src/app/shared/services/PostService/post.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  allPosts : Array<Post> = [];
  postInteraction: PostInteraction|null = null;

  constructor(private PostService: PostService) { }

  ngOnInit(): void {
    this.allPosts = this.PostService.getAll();
  }

  getTimelinePosts() : Array<Post> {
    return this.allPosts;
  }

}

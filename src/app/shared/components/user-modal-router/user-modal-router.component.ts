import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostInteraction } from '../../models/post-interaction.model';
import { Post } from '../../models/post.model';
import { PostService } from '../../services/PostService/post.service';

@Component({
  selector: 'app-user-modal-router',
  templateUrl: './user-modal-router.component.html',
  styleUrls: ['./user-modal-router.component.scss']
})
export class UserModalRouterComponent implements OnInit {

  postInteraction: PostInteraction|null = null;
  allPosts : Array<Post> = [];
  modalUserId: number = 0;

  constructor(private PostService: PostService, route: ActivatedRoute) { 
    route.paramMap.subscribe(params => {
      this.modalUserId = Number(params.get('id'));
   })
  }

  ngOnInit(): void {}

  getUserPosts() : Array<Post> {
    return this.PostService.getAllPostsFromAUserId(this.modalUserId);
  }

}

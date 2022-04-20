import { Component, Input, OnInit } from '@angular/core';
import { postTypes } from '../../constants/configs/posts.configs';
import { KeyString } from '../../models/key-string.model';
import { Post } from '../../models/post.model';
import { User } from '../../models/user.model';
import { PostService } from '../../services/PostService/post.service';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'app-show-individual-post',
  templateUrl: './show-individual-post.component.html',
  styleUrls: ['./show-individual-post.component.scss']
})
export class ShowIndividualPostComponent implements OnInit {

  @Input() id : number = 0;
  @Input() date: Date = new Date();
  @Input() message: string = '';
  name: string|undefined = '';
  photo: string|undefined = '';
  @Input() userId : number = 0;
  @Input() type: string = '';
  @Input() typeTarget: number|null = null;
  postTypes: KeyString = postTypes;
  targetPost : Post|undefined = undefined;
  targetPostUser: User|undefined = undefined;

  constructor(private userService: UserService, private postService: PostService) { 
  }

  ngOnInit(): void {
    let user = this.userService.get(this.userId);
    this.name = user?.name;
    this.photo = user?.photo;

    if (this.showTargetPost()) {
      this.targetPost = this.postService.get(this.typeTarget as number) as Post;
      this.targetPostUser = this.userService.get(this.targetPost.userId as number) as User;
    }

  }

  showTargetPost() : boolean {
    return this.type === postTypes['quote'] || this.type === postTypes['repost']
  }

  putARepost(): void {
    this.postService.put({
      id: Math.floor(100000 + Math.random() * 900000),
      userId: this.userService.getLoggedUserId(),
      date: new Date(),
      message: this.message,
      type: postTypes['repost'],
      typeTarget: this.id
    });
  }

}

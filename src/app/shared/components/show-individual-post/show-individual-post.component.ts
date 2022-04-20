import { Component, Input, OnInit } from '@angular/core';
import { postTypes } from '../../constants/configs/posts.configs';
import { KeyString } from '../../models/key-string.model';
import { Post } from '../../models/post.model';
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
  quotedPost: Post|undefined = undefined;

  constructor(private userService: UserService, private postService: PostService) { 
  }

  ngOnInit(): void {
    let user = this.userService.get(this.userId);
    this.name = user?.name;
    this.photo = user?.photo;

    if (this.type === postTypes['quote']) {
      this.quotedPost = this.postService.get(this.typeTarget ?? 0);
    }

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

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core'
import { postTypes } from '../../constants/configs/posts.configs'
import { KeyString } from '../../models/key-string.model'
import { PostInteraction } from '../../models/post-interaction.model'
import { Post } from '../../models/post.model'
import { User } from '../../models/user.model'
import { PostService } from '../../services/PostService/post.service'
import { UserService } from '../../services/UserService/user.service'

@Component({
  selector: 'app-show-individual-post',
  templateUrl: './show-individual-post.component.html',
  styleUrls: ['./show-individual-post.component.scss'],
})
export class ShowIndividualPostComponent implements OnInit {
  @Input() post: any 
  user: any
  postTypes: KeyString = postTypes
  targetPost: Post | undefined = undefined
  targetPostUser: User | undefined = undefined

  @Output() newPostWithInteraction = new EventEmitter<PostInteraction>()

  constructor(
    private userService: UserService,
    private postService: PostService,
  ) {}

  ngOnInit(): void {
    this.user = this.userService.get(this.post.userId) as User

    if (this.showTargetPost()) {
      this.targetPost = this.postService.get(
        this.post.typeTarget as number,
      ) as Post
      this.targetPostUser = this.userService.get(
        this.targetPost.userId as number,
      ) as User
    }
  }

  showTargetPost(): boolean {
    return (
      this.post.type === postTypes['quote'] ||
      this.post.type === postTypes['repost']
    )
  }

  postInteractionTrigger(typeInteraction: string): void {
    this.newPostWithInteraction.emit({
      type: typeInteraction,
      user: this.user,
      post: this.post,
    })
  }
}

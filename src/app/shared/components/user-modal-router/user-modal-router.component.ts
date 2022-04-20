import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { PostInteraction } from '../../models/post-interaction.model'
import { Post } from '../../models/post.model'
import { User } from '../../models/user.model'
import { PostService } from '../../services/PostService/post.service'
import { UserService } from '../../services/UserService/user.service'
import { SpecificUserDataOnInit } from '../../extends/specific-user-data-on-init/specific-user-data-on-init'

@Component({
  selector: 'app-user-modal-router',
  templateUrl: './user-modal-router.component.html',
  styleUrls: ['./user-modal-router.component.scss'],
})
export class UserModalRouterComponent extends SpecificUserDataOnInit implements OnInit {
  postInteraction: PostInteraction | null = null
  allPosts: Array<Post> = []
  modalUserId: number = 0
  user: User|undefined

  constructor(
    protected override userService: UserService,
    private postService: PostService,
    private route: ActivatedRoute,
  ) {
    super(userService);
    route.paramMap.subscribe((params) => {
      this.modalUserId = Number(params.get('id'))
      this.user = userService.get(this.modalUserId);
    })
  }

  ngOnInit(): void {}

  getUserPosts(): Array<Post> {
    return this.postService.getAllPostsFromAUserId(this.modalUserId)
  }

  getFollowers() : number {
    return 1205;
  }

  getFollowing() : number {
    return 876;
  }
  getNumberOfPosts() : number {
    return 9;
  }
}

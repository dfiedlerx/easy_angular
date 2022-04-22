import { ChangeDetectorRef, Component, OnInit } from '@angular/core'
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
    private changeDetectorRef: ChangeDetectorRef
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
    return this.userService.getFollowersQuantity(this.modalUserId);
  }

  getFollowing() : number {
    return this.userService.getFollowingQuantity(this.modalUserId);
  }

  getNumberOfPosts() : number {
    return this.postService.getAllCreatedPostsQuantityFromAUserId(this.modalUserId);
  }

  loggedUserIsFollower() : boolean {
    return this.userService.checkIfUserFollowsOtherById(this.loggedUserId, this.modalUserId)
  }

  postInteractionClear() : void {
    this.postInteraction = null;
    this.changeDetectorRef.detectChanges();
  }


  actionFollowUnfollow() : void {
    if (this.loggedUserIsFollower()) {
      this.userService.userMakeUnfollow(this.loggedUserId, this.modalUserId);
    } else {
      this.userService.userMakeFollow(this.loggedUserId, this.modalUserId);
    }
  }
  
}

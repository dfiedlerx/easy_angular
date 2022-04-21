import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { postsTimelineFilters } from 'src/app/shared/constants/configs/posts.configs'
import { PostInteraction } from 'src/app/shared/models/post-interaction.model'
import { Post } from 'src/app/shared/models/post.model'
import { PostService } from 'src/app/shared/services/PostService/post.service'
import { UserService } from 'src/app/shared/services/UserService/user.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  postInteraction: PostInteraction|null = null
  choosedFilterPost: string = '';

  constructor(
    private postService: PostService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    route.paramMap.subscribe((params) => {
      this.choosedFilterPost = String(params.get('timeLineFilterType'))
      if (postsTimelineFilters[this.choosedFilterPost] === undefined) {
        this.filterPostChanged(postsTimelineFilters['all'])
      }
    })
  }

  ngOnInit(): void {}

  getTimelinePosts(): Array<Post> {
    if (this.choosedFilterPost === postsTimelineFilters['following']) {
      return this.postService.getAllFollowing(this.userService.getLoggedUserId())
    } else {
      return this.postService.getAll()
    }
  }

  filterPostChanged(value: string|null) : void {
    let choosedFilterPost = this.choosedFilterPost as string;
    this.router.navigateByUrl(this.router.url.replace(choosedFilterPost, value as string));
  }

}

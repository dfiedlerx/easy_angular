
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  ElementRef,
  SimpleChanges,
  DoCheck,
  AfterContentChecked,
} from '@angular/core';
import {
  postsMaxCharacters,
  postTypes,
} from 'src/app/shared/constants/configs/posts.configs';
import { SpecificUserDataOnInit } from 'src/app/shared/extends/specific-user-data-on-init/specific-user-data-on-init';
import { PostInteraction } from 'src/app/shared/models/post-interaction.model';
import { PostService } from 'src/app/shared/services/PostService/post.service';
import { UserService } from 'src/app/shared/services/UserService/user.service';
import { userLoggedId } from '../../constants/configs/users.config';
import { Post } from '../../models/post.model';

@Component({
  selector: 'app-home-type-new-post',
  templateUrl: './home-type-new-post.component.html',
  styleUrls: ['./home-type-new-post.component.scss'],
})
export class HomeTypeNewPostComponent
  extends SpecificUserDataOnInit
  implements OnInit, OnChanges, DoCheck, AfterContentChecked
{
  typedMessage: string = '';
  typesLimit: number = postsMaxCharacters;
  @Input() postInteraction: PostInteraction | null = null;
  @Output() postInteractionClear = new EventEmitter<void>();
  hasPostInteractionChanged: boolean = false;
  todayPostLimit: number = 0;

  ngOnInit(): void {
    this.getTodayPostsLimit();
  }

  constructor(
    protected override userService: UserService,
    private postService: PostService,
    private elRef: ElementRef,
  ) {
    super(userService);
  }

  ngDoCheck(): void {
    if (this.postInteraction !== null) {
      this.scrollToComponent();
    }
  }

  ngAfterContentChecked(): void {
    
    if (this.getPostType() === postTypes['repost']) {
      this.sendNewPost();
      this.triggerPostInteractionClear();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.hasPostInteractionChanged =
      changes['postInteraction'].previousValue !==
      changes['postInteraction'].currentValue;
  }

  scrollToComponent() {
    if (this.hasPostInteractionChanged) {
      this.elRef.nativeElement
        .querySelector('textarea')
        .closest('.theme-layout')
        .scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  getCharactersLeft(): number {
    return this.typesLimit - this.typedMessage.length;
  }

  isInvalidCharactersLength(): boolean {
    return this.getCharactersLeft() < 0;
  }

  isLimitTodayPostReached(): boolean {
    return this.todayPostLimit <= 0;
  }

  sendNewPost(): void {
    if (!this.isLimitTodayPostReached() && (this.isRepost() || this.validToPost())) {
      this.postService.put({
        id: Math.floor(100000 + Math.random() * 900000),
        userId: this.loggedUserId,
        date: new Date(),
        message: this.getPostMessage(),
        type: this.getPostType(),
        typeTarget: this.getTypeTarget(),
      });
      this.typedMessage = '';
      this.getTodayPostsLimit();
      this.triggerPostInteractionClear();
    }
  }

  private isRepost(): boolean {
    return this.getPostType() === postTypes['repost'];
  }

  private validToPost(): boolean {
    return (
      !this.isInvalidCharactersLength() &&
      this.typedMessage.length > 0
    );
  }

  private getPostMessage(): string {
    return this.isRepost() && this.postInteraction !== null
      ? String(
          (this.postService.get(this.postInteraction.post.id) as Post).message
        )
      : this.typedMessage;
  }

  private getPostType(): string {
    return this.postInteraction === null
      ? postTypes['normal']
      : this.postInteraction.type;
  }

  private getTypeTarget(): number | null {
    return this.postInteraction === null ? null : this.postInteraction.post.id;
  }

  triggerPostInteractionClear(): void {
    this.postInteraction = null;
    this.postInteractionClear.emit();
  }

  private getTodayPostsLimit(): void {
    this.todayPostLimit = this.postService.getUserTodayLimitPosts(userLoggedId);
  }
}

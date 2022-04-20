import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { postsMaxCharacters, postTypes } from 'src/app/shared/constants/configs/posts.configs';
import { SpecificUserDataOnInit } from 'src/app/shared/extends/specific-user-data-on-init/specific-user-data-on-init';
import { PostInteraction } from 'src/app/shared/models/post-interaction.model';
import { PostService } from 'src/app/shared/services/PostService/post.service';
import { UserService } from 'src/app/shared/services/UserService/user.service';


@Component({
  selector: 'app-home-type-new-post',
  templateUrl: './home-type-new-post.component.html',
  styleUrls: ['./home-type-new-post.component.scss']
})
export class HomeTypeNewPostComponent extends SpecificUserDataOnInit {

  typedMessage: string = '';
  typesLimit : number = postsMaxCharacters;
  @Input() postInteraction: PostInteraction | null = null;
  @Output() postInteractionClear = new EventEmitter<void>()

  override ngOnInit(): void {}

  
  constructor(protected override userService: UserService, protected postService : PostService) { 
    super(userService)
  }

  getCharactersLeft () : number {
    return this.typesLimit - this.typedMessage.length;
  }

  isInvalidCharactersLength () : boolean {
    return this.getCharactersLeft() < 0;
  }

  sendNewPost () : void {
    if (!this.isInvalidCharactersLength() && this.typedMessage.length > 0) {
      this.postService.put({
        id: Math.floor(100000 + Math.random() * 900000),
        userId: this.loggedUserId,
        date: new Date(),
        message: this.typedMessage,
        type: this.getPostType(),
        typeTarget: this.getTypeTarget()
      });
      this.typedMessage = '';
      this.triggerPostInteractionClear();
    }
  }

  private getPostType() : string {
    return this.postInteraction === null ? postTypes['normal'] : this.postInteraction.type;
  }

  private getTypeTarget() : number|null {
    return this.postInteraction === null ? null : this.postInteraction.post.id;
  }

  triggerPostInteractionClear () : void {
    this.postInteractionClear.emit();
  }

}

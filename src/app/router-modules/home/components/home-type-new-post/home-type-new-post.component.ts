import { Component } from '@angular/core';
import { postsMaxCharacters } from 'src/app/shared/constants/configs/posts.configs';
import { SpecificUserDataOnInit } from 'src/app/shared/implements/specific-user-data-on-init/specific-user-data-on-init';
import { UserService } from 'src/app/shared/services/UserService/user.service';

@Component({
  selector: 'app-home-type-new-post',
  templateUrl: './home-type-new-post.component.html',
  styleUrls: ['./home-type-new-post.component.scss']
})
export class HomeTypeNewPostComponent extends SpecificUserDataOnInit {

  typedMessage: string = '';
  typesLimit : number = postsMaxCharacters;

  override ngOnInit(): void {
  }

  getCharactersLeft () : number {
    return this.typesLimit - this.typedMessage.length;
  }

  isInvalidCharactersLength () : boolean {
    return this.getCharactersLeft() < 0;
  }

}

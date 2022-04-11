import { Component, OnInit } from '@angular/core';
import { postsConfigs } from 'src/app/shared/constants/configs/posts.configs';

@Component({
  selector: 'app-home-type-new-post',
  templateUrl: './home-type-new-post.component.html',
  styleUrls: ['./home-type-new-post.component.scss']
})
export class HomeTypeNewPostComponent implements OnInit {

  typedMessage: string = '';
  typesLimit : number = postsConfigs['maxCharacters'] as number;

  constructor() { }

  ngOnInit(): void {
  }

  getCharactersLeft () : number {
    return this.typesLimit - this.typedMessage.length;
  }

}

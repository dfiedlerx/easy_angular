import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { postsTimelineFilters } from 'src/app/shared/constants/configs/posts.configs';
import { KeyValue } from 'src/app/shared/models/key-value.model';

@Component({
  selector: 'app-home-toogle-all-following',
  templateUrl: './home-toogle-all-following.component.html',
  styleUrls: ['./home-toogle-all-following.component.scss']
})
export class HomeToogleAllFollowingComponent implements OnInit {

  toogleOption : Array<KeyValue>;
  @Input() selectedOption : string|null;
  @Output() postsToogleOptionChanged = new EventEmitter<string>();

  constructor() {
    this.toogleOption = [
      {
        key: postsTimelineFilters['all'],
        value: 'All'
      },
      {
        key: postsTimelineFilters['following'],
        value: 'Following'
      }
    ];

    this.selectedOption = this.toogleOption['0'].key;
  }

  ngOnInit(): void {
  }

  triggerToogleOption (option : string) : void {
    if (option !== this.selectedOption) {
      this.selectedOption = option;
      this.postsToogleOptionChanged.emit(option);
    }
  }

}

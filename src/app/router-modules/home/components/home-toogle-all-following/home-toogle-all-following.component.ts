import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { KeyValue } from 'src/app/shared/models/key-value.model';

@Component({
  selector: 'app-home-toogle-all-following',
  templateUrl: './home-toogle-all-following.component.html',
  styleUrls: ['./home-toogle-all-following.component.scss']
})
export class HomeToogleAllFollowingComponent implements OnInit {

  toogleOption : Array<KeyValue>;
  selectedOption : string;
  @Output() postsToogleOptionChanged = new EventEmitter<string>();

  constructor() {
    this.toogleOption = [
      {
        key: 'all',
        value: 'All'
      },
      {
        key: 'follow',
        value: 'Follow'
      }
    ];

    this.selectedOption = this.toogleOption['0'].key;
  }

  ngOnInit(): void {
  }

  triggerToogleOption (option : string) : void {
    this.selectedOption = option;
    this.postsToogleOptionChanged.emit(option);
  }

}

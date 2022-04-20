import { Component, Input, OnInit } from '@angular/core';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-user-name-photo-text',
  templateUrl: './user-name-photo-text.component.html',
  styleUrls: ['./user-name-photo-text.component.scss']
})
export class UserNamePhotoTextComponent implements OnInit {

  @Input() user: User|undefined = undefined;

  constructor() { }

  ngOnInit(): void {
  }

}

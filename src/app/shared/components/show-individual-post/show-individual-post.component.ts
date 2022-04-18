import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../services/UserService/user.service';

@Component({
  selector: 'app-show-individual-post',
  templateUrl: './show-individual-post.component.html',
  styleUrls: ['./show-individual-post.component.scss']
})
export class ShowIndividualPostComponent implements OnInit {

  @Input() id : number = 0;
  @Input() date: Date = new Date();
  @Input() message: string = '';
  name: string|undefined = '';
  photo: string|undefined = '';
  @Input() userId : number = 0;
  @Input() isRepost: boolean = false;

  constructor(private UserService: UserService) { 
  }

  ngOnInit(): void {
    let user = this.UserService.get(this.userId);
    this.name = user?.name;
    this.photo = user?.photo;
  }

}

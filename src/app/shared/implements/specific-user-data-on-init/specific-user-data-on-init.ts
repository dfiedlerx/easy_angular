import { Component, Directive, OnInit } from "@angular/core";
import { User } from "../../models/user.model";
import { UserService } from "../../services/UserService/user.service";

@Directive({
    selector: '[specificUserDataOnInit]'
})
export class SpecificUserDataOnInit implements OnInit {
    loggedUserData : User | undefined;
    loggedUserId: number;
  
    constructor(protected userService: UserService) { 
      this.loggedUserId = userService.getLoggedUserId()
      this.loggedUserData = userService.get(this.loggedUserId);
    }

    ngOnInit(): void {

    }

}

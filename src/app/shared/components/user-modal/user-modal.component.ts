import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-modal',
  exportAs: 'modal',
  templateUrl: './user-modal.component.html',
  styleUrls: ['./user-modal.component.scss']
})
export class UserModalComponent {

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();

  constructor( private router : Router ) {}
    
  closeModal( $event : any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

}

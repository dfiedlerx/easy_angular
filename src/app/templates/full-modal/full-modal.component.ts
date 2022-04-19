import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-modal',
  exportAs: 'modal',
  templateUrl: './full-modal.component.html',
  styleUrls: ['./full-modal.component.scss']
})
export class FullModalComponent {

  @Output() modalClose : EventEmitter<any> = new EventEmitter<any>();

  constructor( private router : Router ) {}
    
  closeModal( $event : any ) {
    this.router.navigate([{outlets: {modal: null}}]);
    this.modalClose.next($event);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIndividualPostComponent } from './components/show-individual-post/show-individual-post.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { UserModalRouterComponent } from './components/user-modal-router/user-modal-router.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ShowIndividualPostComponent,
    UserModalComponent,
    UserModalRouterComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ShowIndividualPostComponent
  ]
})
export class SharedModule { }

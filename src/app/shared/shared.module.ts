import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIndividualPostComponent } from './components/show-individual-post/show-individual-post.component';
import { UserModalRouterComponent } from './components/user-modal-router/user-modal-router.component';
import { RouterModule } from '@angular/router';
import { TemplatesModule } from '../templates/templates.module';
import { FirstCharUppercasePipe } from './pipes/first-chat-uppercase/first-char-uppercase.pipe';



@NgModule({
  declarations: [
    ShowIndividualPostComponent,
    UserModalRouterComponent,
    FirstCharUppercasePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule
  ],
  exports: [
    ShowIndividualPostComponent,
    FirstCharUppercasePipe,
  ]
})
export class SharedModule { }

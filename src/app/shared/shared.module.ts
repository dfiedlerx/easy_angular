import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIndividualPostComponent } from './components/show-individual-post/show-individual-post.component';
import { UserModalRouterComponent } from './components/user-modal-router/user-modal-router.component';
import { RouterModule } from '@angular/router';
import { AppModule } from '../app.module';
import { TemplatesModule } from '../templates/templates.module';



@NgModule({
  declarations: [
    ShowIndividualPostComponent,
    UserModalRouterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TemplatesModule
  ],
  exports: [
    ShowIndividualPostComponent
  ]
})
export class SharedModule { }

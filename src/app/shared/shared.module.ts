import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { ShowIndividualPostComponent } from './components/show-individual-post/show-individual-post.component'
import { UserModalRouterComponent } from './components/user-modal-router/user-modal-router.component'
import { RouterModule } from '@angular/router'
import { TemplatesModule } from '../templates/templates.module'
import { FirstCharUppercasePipe } from './pipes/first-chat-uppercase/first-char-uppercase.pipe'
import { UserNamePhotoTextComponent } from './components/user-name-photo-text/user-name-photo-text.component'
import { HomeTypeNewPostComponent } from './components/home-type-new-post/home-type-new-post.component'
import { FormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    ShowIndividualPostComponent,
    HomeTypeNewPostComponent,
    UserModalRouterComponent,
    FirstCharUppercasePipe,
    UserNamePhotoTextComponent,
  ],
  imports: [CommonModule, RouterModule, TemplatesModule, FormsModule ],
  exports: [
    ShowIndividualPostComponent,
    HomeTypeNewPostComponent,
    FirstCharUppercasePipe,
    UserNamePhotoTextComponent,
  ],
})
export class SharedModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowIndividualPostComponent } from './components/show-individual-post/show-individual-post.component';



@NgModule({
  declarations: [
    ShowIndividualPostComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ShowIndividualPostComponent
  ]
})
export class SharedModule { }

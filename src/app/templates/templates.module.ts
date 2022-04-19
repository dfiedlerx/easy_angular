import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullModalComponent } from './full-modal/full-modal.component';
import { MainTemplateBodyComponent } from './main-template/components/main-template-body/main-template-body.component';
import { MainTemplateComponent } from './main-template/main-template.component';
import { MainTemplateFooterComponent } from './main-template/components/main-template-footer/main-template-footer.component';
import { MainTemplateHeaderComponent } from './main-template/components/main-template-header/main-template-header.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FullModalComponent,
    MainTemplateBodyComponent,
    MainTemplateComponent,
    MainTemplateFooterComponent,
    MainTemplateHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FullModalComponent,
    MainTemplateComponent
  ]
})
export class TemplatesModule { }

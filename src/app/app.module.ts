import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainTemplateComponent } from './templates/main-template/main-template.component';
import { MainTemplateHeaderComponent } from './templates/main-template/components/main-template-header/main-template-header.component';
import { MainTemplateBodyComponent } from './templates/main-template/components/main-template-body/main-template-body.component';
import { MainTemplateFooterComponent } from './templates/main-template/components/main-template-footer/main-template-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MainTemplateComponent,
    MainTemplateHeaderComponent,
    MainTemplateBodyComponent,
    MainTemplateFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

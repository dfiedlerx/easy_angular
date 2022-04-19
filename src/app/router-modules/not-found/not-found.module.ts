import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotFoundRoutingModule } from './not-found-routing.module';
import { NotFoundComponent } from './not-found.component';
import { NotFoundTopAreaAnimatedComponent } from './components/not-found-top-area-animated/not-found-top-area-animated.component';
import { NotFoundBackAreaStaticComponent } from './components/not-found-back-area-static/not-found-back-area-static.component';


@NgModule({
  declarations: [
    NotFoundComponent,
    NotFoundTopAreaAnimatedComponent,
    NotFoundBackAreaStaticComponent
  ],
  imports: [
    CommonModule,
    NotFoundRoutingModule
  ]
})
export class NotFoundModule { }

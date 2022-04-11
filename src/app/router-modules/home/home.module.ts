import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HomeTypeNewPostComponent } from './home-type-new-post/home-type-new-post.component';
import { HomeShowPostComponent } from './home-show-post/home-show-post.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    HomeTypeNewPostComponent,
    HomeShowPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }

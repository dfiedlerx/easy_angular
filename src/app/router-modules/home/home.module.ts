import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HomeTypeNewPostComponent } from './components/home-type-new-post/home-type-new-post.component';
import { HomeShowPostComponent } from './components/home-show-post/home-show-post.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent,
    HomeTypeNewPostComponent,
    HomeShowPostComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }

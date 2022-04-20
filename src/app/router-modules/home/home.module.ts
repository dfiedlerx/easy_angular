import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HomeTypeNewPostComponent } from './components/home-type-new-post/home-type-new-post.component';
import { HomeShowPostComponent } from './components/home-show-post/home-show-post.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeToogleAllFollowingComponent } from './components/home-toogle-all-following/home-toogle-all-following.component';
import { FirstCharUppercasePipe } from 'src/app/shared/pipes/first-chat-uppercase/first-char-uppercase.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    HomeTypeNewPostComponent,
    HomeShowPostComponent,
    HomeToogleAllFollowingComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }

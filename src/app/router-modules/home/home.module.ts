import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { HomeShowPostComponent } from './components/home-show-post/home-show-post.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeToogleAllFollowingComponent } from './components/home-toogle-all-following/home-toogle-all-following.component';

@NgModule({
  declarations: [
    HomeComponent,
    HomeShowPostComponent,
    HomeToogleAllFollowingComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
  ]
})
export class HomeModule { }

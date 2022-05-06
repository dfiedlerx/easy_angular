import { NgModule } from '@angular/core'

/* 
 Use this module only for shared and common components for entire application, for the 
 best lazyload use, do not use this module to share specific components or situational 
 components that will not be used in a large part of the system. 
 For this case, create a new module in the 'modules' folder and place your situational 
 components inside it, separating them according to their use and need.
*/

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
})
export class SharedModule {}

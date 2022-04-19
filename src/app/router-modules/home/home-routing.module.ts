import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModalRouterComponent } from 'src/app/shared/components/user-modal-router/user-modal-router.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  }, 
  {
    path: 'user/:id',
    component: UserModalRouterComponent,
    outlet: 'modal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

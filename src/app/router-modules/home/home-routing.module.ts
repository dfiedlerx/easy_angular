import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModalRouterComponent } from 'src/app/shared/components/user-modal-router/user-modal-router.component';
import { homeRootRoute, homeUserModalRoute } from 'src/app/shared/constants/configs/routes.configs';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: homeRootRoute,
    component: HomeComponent
  }, 
  {
    path: homeUserModalRoute,
    component: UserModalRouterComponent,
    outlet: 'modal'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

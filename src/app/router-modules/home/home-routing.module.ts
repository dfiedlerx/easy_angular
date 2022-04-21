import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModalRouterComponent } from 'src/app/shared/components/user-modal-router/user-modal-router.component';
import { homeUserModalRoute, rootRoute } from 'src/app/shared/constants/configs/routes.configs';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: rootRoute,
    component: HomeComponent,
  },
  {
    path: ':timeLineFilterType',
    component: HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

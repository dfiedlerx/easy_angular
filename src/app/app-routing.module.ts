import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homeRootRoute, notFoundRoute } from './shared/constants/configs/routes.configs';

const routes: Routes = [
  {
    path: homeRootRoute,
    loadChildren: () => import('./router-modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: notFoundRoute,
    loadChildren: () => import('./router-modules/not-found/not-found.module').then(m => m.NotFoundModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

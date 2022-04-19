import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { notFoundRoute, rootRoute } from './shared/constants/configs/routes.configs';
import { AuthResolver } from './shared/resolvers/auth-resolver/auth.resolver';

const routes: Routes = [
  {
    path: rootRoute,
    loadChildren: () => import('./router-modules/home/home.module').then(m => m.HomeModule),
    resolve: {
      authResolver: AuthResolver
    }
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

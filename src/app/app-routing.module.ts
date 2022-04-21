import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserModalRouterComponent } from './shared/components/user-modal-router/user-modal-router.component';
import { homeRootRoute, homeUserModalRoute, notFoundRoute, rootRoute } from './shared/constants/configs/routes.configs';
import { AuthResolver } from './shared/resolvers/auth-resolver/auth.resolver';

const routes: Routes = [
  {
    path: homeRootRoute,
    loadChildren: () => import('./router-modules/home/home.module').then(m => m.HomeModule),
    resolve: {
      authResolver: AuthResolver
    }
  },
  {
    path: homeUserModalRoute,
    component: UserModalRouterComponent,
    outlet: 'modal'
  },
  {
    path: rootRoute,
    redirectTo: homeRootRoute,
    pathMatch: 'full'
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

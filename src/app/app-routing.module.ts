import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeModule } from './router-modules/home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./router-modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: '**',
    loadChildren: () => import('./router-modules/not-found/not-found.module').then(m => m.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

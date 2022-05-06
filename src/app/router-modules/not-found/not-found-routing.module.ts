import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundIndexComponent } from './components/not-found-index/not-found-index.component';

const routes: Routes = [
  {
    path: '',
    component: NotFoundIndexComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotFoundRoutingModule { }

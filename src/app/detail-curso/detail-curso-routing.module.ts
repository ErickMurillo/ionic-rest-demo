import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailCursoPage } from './detail-curso.page';

const routes: Routes = [
  {
    path: '',
    component: DetailCursoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCursoPageRoutingModule {}

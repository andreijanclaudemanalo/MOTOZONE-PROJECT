import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NmaxPage } from './nmax.page';

const routes: Routes = [
  {
    path: '',
    component: NmaxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NmaxPageRoutingModule {}

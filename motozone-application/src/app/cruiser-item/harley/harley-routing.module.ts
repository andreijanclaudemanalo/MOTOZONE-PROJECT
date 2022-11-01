import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HarleyPage } from './harley.page';

const routes: Routes = [
  {
    path: '',
    component: HarleyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HarleyPageRoutingModule {}

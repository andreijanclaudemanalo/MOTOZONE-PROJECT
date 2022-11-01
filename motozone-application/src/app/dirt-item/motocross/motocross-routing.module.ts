import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotocrossPage } from './motocross.page';

const routes: Routes = [
  {
    path: '',
    component: MotocrossPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotocrossPageRoutingModule {}

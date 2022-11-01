import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirtPage } from './dirt.page';

const routes: Routes = [
  {
    path: '',
    component: DirtPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirtPageRoutingModule {}

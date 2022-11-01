import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VulcanPage } from './vulcan.page';

const routes: Routes = [
  {
    path: '',
    component: VulcanPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VulcanPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PcxPage } from './pcx.page';

const routes: Routes = [
  {
    path: '',
    component: PcxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PcxPageRoutingModule {}

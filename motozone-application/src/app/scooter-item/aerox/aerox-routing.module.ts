import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AeroxPage } from './aerox.page';

const routes: Routes = [
  {
    path: '',
    component: AeroxPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AeroxPageRoutingModule {}

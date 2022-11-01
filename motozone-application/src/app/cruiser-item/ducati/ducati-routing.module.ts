import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DucatiPage } from './ducati.page';

const routes: Routes = [
  {
    path: '',
    component: DucatiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DucatiPageRoutingModule {}

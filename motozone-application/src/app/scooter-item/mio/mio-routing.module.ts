import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MioPage } from './mio.page';

const routes: Routes = [
  {
    path: '',
    component: MioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MioPageRoutingModule {}

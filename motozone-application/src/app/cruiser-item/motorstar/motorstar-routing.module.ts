import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotorstarPage } from './motorstar.page';

const routes: Routes = [
  {
    path: '',
    component: MotorstarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotorstarPageRoutingModule {}

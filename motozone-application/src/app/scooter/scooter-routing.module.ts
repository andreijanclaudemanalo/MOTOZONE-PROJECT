import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScooterPage } from './scooter.page';

const routes: Routes = [
  {
    path: '',
    component: ScooterPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScooterPageRoutingModule {}

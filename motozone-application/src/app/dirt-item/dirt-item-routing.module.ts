import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DirtItemPage } from './dirt-item.page';

const routes: Routes = [
  {
    path: '',
    component: DirtItemPage
  },
  {
    path: 'enduro',
    loadChildren: () => import('./enduro/enduro.module').then( m => m.EnduroPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DirtItemPageRoutingModule {}

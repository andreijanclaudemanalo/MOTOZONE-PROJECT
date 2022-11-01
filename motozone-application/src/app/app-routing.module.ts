import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'loader',
    pathMatch: 'full'
  },

  {
    path: 'loader',
    loadChildren: () => import('./loader/loader.module').then( m => m.LoaderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'dirt',
    loadChildren: () => import('./dirt/dirt.module').then( m => m.DirtPageModule)
  },
  {
    path: 'sport',
    loadChildren: () => import('./sport/sport.module').then( m => m.SportPageModule)
  },
  {
    path: 'cruiser',
    loadChildren: () => import('./cruiser/cruiser.module').then( m => m.CruiserPageModule)
  },
  {
    path: 'scooter',
    loadChildren: () => import('./scooter/scooter.module').then( m => m.ScooterPageModule)
  },
  {
    path: 'dirt-item',
    loadChildren: () => import('./dirt-item/dirt-item.module').then( m => m.DirtItemPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

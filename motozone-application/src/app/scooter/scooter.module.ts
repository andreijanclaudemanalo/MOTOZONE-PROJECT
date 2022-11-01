import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ScooterPageRoutingModule } from './scooter-routing.module';

import { ScooterPage } from './scooter.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ScooterPageRoutingModule
  ],
  declarations: [ScooterPage]
})
export class ScooterPageModule {}

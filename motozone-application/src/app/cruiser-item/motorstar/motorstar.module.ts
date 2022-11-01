import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotorstarPageRoutingModule } from './motorstar-routing.module';

import { MotorstarPage } from './motorstar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotorstarPageRoutingModule
  ],
  declarations: [MotorstarPage]
})
export class MotorstarPageModule {}

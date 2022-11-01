import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotocrossPageRoutingModule } from './motocross-routing.module';

import { MotocrossPage } from './motocross.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotocrossPageRoutingModule
  ],
  declarations: [MotocrossPage]
})
export class MotocrossPageModule {}

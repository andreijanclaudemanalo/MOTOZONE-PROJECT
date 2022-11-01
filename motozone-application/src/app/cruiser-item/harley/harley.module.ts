import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HarleyPageRoutingModule } from './harley-routing.module';

import { HarleyPage } from './harley.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HarleyPageRoutingModule
  ],
  declarations: [HarleyPage]
})
export class HarleyPageModule {}

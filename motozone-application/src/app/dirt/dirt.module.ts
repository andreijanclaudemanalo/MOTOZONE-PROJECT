import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirtPageRoutingModule } from './dirt-routing.module';

import { DirtPage } from './dirt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirtPageRoutingModule
  ],
  declarations: [DirtPage]
})
export class DirtPageModule {}

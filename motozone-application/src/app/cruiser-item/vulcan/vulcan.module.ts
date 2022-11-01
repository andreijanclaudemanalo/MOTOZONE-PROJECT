import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VulcanPageRoutingModule } from './vulcan-routing.module';

import { VulcanPage } from './vulcan.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VulcanPageRoutingModule
  ],
  declarations: [VulcanPage]
})
export class VulcanPageModule {}

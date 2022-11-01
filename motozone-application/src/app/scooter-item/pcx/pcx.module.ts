import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PcxPageRoutingModule } from './pcx-routing.module';

import { PcxPage } from './pcx.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PcxPageRoutingModule
  ],
  declarations: [PcxPage]
})
export class PcxPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DirtItemPageRoutingModule } from './dirt-item-routing.module';

import { DirtItemPage } from './dirt-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DirtItemPageRoutingModule
  ],
  declarations: [DirtItemPage]
})
export class DirtItemPageModule {}

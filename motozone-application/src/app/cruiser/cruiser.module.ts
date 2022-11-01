import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CruiserPageRoutingModule } from './cruiser-routing.module';

import { CruiserPage } from './cruiser.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CruiserPageRoutingModule
  ],
  declarations: [CruiserPage]
})
export class CruiserPageModule {}

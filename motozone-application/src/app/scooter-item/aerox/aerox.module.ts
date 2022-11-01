import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AeroxPageRoutingModule } from './aerox-routing.module';

import { AeroxPage } from './aerox.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AeroxPageRoutingModule
  ],
  declarations: [AeroxPage]
})
export class AeroxPageModule {}

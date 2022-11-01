import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnduroPageRoutingModule } from './enduro-routing.module';

import { EnduroPage } from './enduro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnduroPageRoutingModule
  ],
  declarations: [EnduroPage]
})
export class EnduroPageModule {}

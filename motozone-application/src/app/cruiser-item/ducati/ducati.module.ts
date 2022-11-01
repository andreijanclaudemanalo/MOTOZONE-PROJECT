import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DucatiPageRoutingModule } from './ducati-routing.module';

import { DucatiPage } from './ducati.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DucatiPageRoutingModule
  ],
  declarations: [DucatiPage]
})
export class DucatiPageModule {}

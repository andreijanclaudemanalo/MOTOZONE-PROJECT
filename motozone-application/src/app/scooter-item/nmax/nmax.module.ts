import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NmaxPageRoutingModule } from './nmax-routing.module';

import { NmaxPage } from './nmax.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NmaxPageRoutingModule
  ],
  declarations: [NmaxPage]
})
export class NmaxPageModule {}

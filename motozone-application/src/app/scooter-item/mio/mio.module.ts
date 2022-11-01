import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MioPageRoutingModule } from './mio-routing.module';

import { MioPage } from './mio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MioPageRoutingModule
  ],
  declarations: [MioPage]
})
export class MioPageModule {}

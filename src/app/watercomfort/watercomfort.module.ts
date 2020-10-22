import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatercomfortPageRoutingModule } from './watercomfort-routing.module';

import { WatercomfortPage } from './watercomfort.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatercomfortPageRoutingModule
  ],
  declarations: [WatercomfortPage]
})
export class WatercomfortPageModule {}

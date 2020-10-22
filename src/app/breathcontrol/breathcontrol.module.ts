import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BreathcontrolPageRoutingModule } from './breathcontrol-routing.module';

import { BreathcontrolPage } from './breathcontrol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BreathcontrolPageRoutingModule
  ],
  declarations: [BreathcontrolPage]
})
export class BreathcontrolPageModule {}

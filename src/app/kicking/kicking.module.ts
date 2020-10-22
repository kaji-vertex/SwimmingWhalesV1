import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KickingPageRoutingModule } from './kicking-routing.module';

import { KickingPage } from './kicking.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KickingPageRoutingModule
  ],
  declarations: [KickingPage]
})
export class KickingPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StrokesPageRoutingModule } from './strokes-routing.module';

import { StrokesPage } from './strokes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StrokesPageRoutingModule
  ],
  declarations: [StrokesPage]
})
export class StrokesPageModule {}

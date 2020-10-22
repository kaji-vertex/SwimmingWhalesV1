import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BreathcontrolPage } from './breathcontrol.page';

const routes: Routes = [
  {
    path: '',
    component: BreathcontrolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreathcontrolPageRoutingModule {}

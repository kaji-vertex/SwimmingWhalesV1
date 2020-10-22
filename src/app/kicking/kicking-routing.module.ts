import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KickingPage } from './kicking.page';

const routes: Routes = [
  {
    path: '',
    component: KickingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KickingPageRoutingModule {}

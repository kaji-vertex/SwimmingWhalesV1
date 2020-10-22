import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StrokesPage } from './strokes.page';

const routes: Routes = [
  {
    path: '',
    component: StrokesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StrokesPageRoutingModule {}

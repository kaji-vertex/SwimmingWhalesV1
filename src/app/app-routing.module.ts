import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'guide-details',
    loadChildren: () => import('./guide-details/guide-details.module').then( m => m.GuideDetailsPageModule)
  },
  {
    path: 'watercomfort',
    loadChildren: () => import('./waterComfort/waterComfort.module').then( m => m.WatercomfortPageModule)
  },
  {
    path: 'breathcontrol',
    loadChildren: () => import('./breathcontrol/breathcontrol.module').then( m => m.BreathcontrolPageModule)
  },
  {
    path: 'floating',
    loadChildren: () => import('./floating/floating.module').then( m => m.FloatingPageModule)
  },
  {
    path: 'kicking',
    loadChildren: () => import('./kicking/kicking.module').then( m => m.KickingPageModule)
  },
  {
    path: 'strokes',
    loadChildren: () => import('./strokes/strokes.module').then( m => m.StrokesPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

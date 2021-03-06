import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DesignsComponent } from './designs.component';
import { LogoComponent } from './logos/logo/logo.component';

const routes: Routes = [
  {path: '', component: DesignsComponent,
  children:[
    {
      path: 'logos/:name',
      component: LogoComponent
    }
  ]},
  { path: 'pixel-sorting', loadChildren: () => import('./pages/design-pixel-sorting/design-pixel-sorting.module').then(m => m.DesignPixelSortingModule)},
  { path: 'apricity-media-group', loadChildren: () => import('./pages/design-apricity/design-apricity.module').then(m => m.DesignApricityModule)},
  { path: 'design-decals', loadChildren: () => import('./pages/design-design-decals/design-design-decals.module').then(m => m.DesignDesignDecalsModule)},
  { path: 'prevail-gaming', loadChildren: () => import('./pages/design-prevail-gaming/design-prevail-gaming.module').then(m => m.DesignPrevailGamingModule)},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DesignsRoutingModule { }
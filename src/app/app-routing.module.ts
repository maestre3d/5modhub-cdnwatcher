/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root routing module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './common/guards/auth/auth.guard';


const routes: Routes = [
  {
    path: 'notfound',
    loadChildren: () => import('src/app/shared/notfound/notfound.module').then(module => module.NotfoundModule)
  },
  {
    path: 'signin',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./shared/auth/auth.module').then(module => module.AuthModule)
  },
  {
    path: '',
    canActivate: [ AuthGuard ],
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  },
  {
    path: '**',
    redirectTo: 'notfound',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

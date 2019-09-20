/**
 * @name Modhub-watcher
 * @version 1.0.0b
 * @copyright Modding Agency (Grand Theft Auto 5 Modding). 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root page routing module
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PAGES_ROUTES } from './pages.routes';

@NgModule({
  imports: [PAGES_ROUTES],
  exports: [RouterModule]
})
export class PagesRoutingModule { }

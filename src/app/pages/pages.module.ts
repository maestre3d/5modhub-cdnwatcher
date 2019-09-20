/**
 * @name Modhub-watcher
 * @version 1.0.0b
 * @copyright Modding Agency (Grand Theft Auto 5 Modding). 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root page module
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './root/pages.component';


@NgModule({
  declarations: [PagesComponent],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdnRoutingModule } from './cdn-routing.module';
import { CdnComponent } from './components/cdn.component';


@NgModule({
  declarations: [CdnComponent],
  imports: [
    CommonModule,
    CdnRoutingModule
  ]
})
export class CdnModule { }

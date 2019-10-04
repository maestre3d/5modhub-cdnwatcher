import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

import { FileRoutingModule } from './file-routing.module';
import { FileComponent } from './components/file.component';


@NgModule({
  declarations: [FileComponent],
  imports: [
    CommonModule,
    FileRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class FileModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CdnComponent } from './components/cdn.component';


const routes: Routes = [
  {
    path: '',
    component: CdnComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CdnRoutingModule { }

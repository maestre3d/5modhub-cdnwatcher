import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IamComponent } from './components/iam.component';


const routes: Routes = [
  {
    path: '',
    component: IamComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IamRoutingModule { }

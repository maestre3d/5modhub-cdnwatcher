import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./pages/pages.module').then(module => module.PagesModule)
  },
  {
    path: 'notfound',
    loadChildren: () => import('./shared/notfound/notfound.module').then(module => module.NotfoundModule)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'notfound'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root page routing
 */
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './root/pages.component';

const AppRouting: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                loadChildren: () => import('src/app/pages/home/home.module').then(module => module.HomeModule)
            }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild(AppRouting);

import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './root/pages.component';

/**
 * @name Modhub-watcher
 * @version 1.0.0b
 * @copyright Modding Agency (Grand Theft Auto 5 Modding). 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root page routing
 */

const AppRouting: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: []
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: '404'
    }
];

export const PAGES_ROUTES = RouterModule.forChild(AppRouting);

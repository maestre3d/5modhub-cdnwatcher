/**
 * @name Modhub-watcher
 * @version 1.0.0b
 * @copyright Modding Agency (Grand Theft Auto 5 Modding). 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Material bundler
 */

import { NgModule } from '@angular/core';
import * as Material from '@angular/material';

import { LayoutModule } from '@angular/cdk/layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        Material.MatButtonModule,
        Material.MatCardModule,
        Material.MatFormFieldModule,
        Material.MatInputModule,
        Material.MatIconModule,
        Material.MatToolbarModule,
        Material.MatListModule,
        Material.MatChipsModule,
        Material.MatDialogModule,
        Material.MatDividerModule,
        Material.MatBadgeModule,
        Material.MatAutocompleteModule,
        Material.MatProgressSpinnerModule,
        Material.MatProgressBarModule,
        Material.MatTabsModule,
        Material.MatSidenavModule,
        Material.MatSnackBarModule,
        LayoutModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})

export class MaterialModule {}

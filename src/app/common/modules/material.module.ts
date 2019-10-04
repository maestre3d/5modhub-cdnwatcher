/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Material Design bundler
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
        Material.MatMenuModule,
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

export class MaterialBundleModule {}

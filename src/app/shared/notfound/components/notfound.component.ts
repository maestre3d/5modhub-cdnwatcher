/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Not found component
 */

import { Component, OnInit } from '@angular/core';
import APP_CONFIG from 'src/app/config';
import { ThemeService } from 'src/app/common/services/theme/theme.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss']
})
export class NotfoundComponent implements OnInit {
  title = APP_CONFIG.Name;
  year = new Date().getFullYear();
  isDarkTheme$: Observable<boolean>;

  constructor(private themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
  }

  ngOnInit() {
  }

}

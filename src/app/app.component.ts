/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root component
 */

import { Component, OnInit, OnDestroy } from '@angular/core';
import APP_CONFIG from './config';
import { ThemeService } from './common/services/theme/theme.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = APP_CONFIG.Name;
  isDarkTheme$: Observable<boolean>;
  subject$: Subject<void> = new Subject<void>();

  constructor(private themeService: ThemeService) {
    this.themeService.isDarkTheme$.pipe(takeUntil(this.subject$))
    .subscribe((theme: boolean) => {
      const isDarkString = theme ? 'true' : 'false';
      localStorage.setItem('DarkTheme', isDarkString);
    });
  }

  ngOnInit(): void {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
    this.themeService.getConfig();
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.complete();
  }
}

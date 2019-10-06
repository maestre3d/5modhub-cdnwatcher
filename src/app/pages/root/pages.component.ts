/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Root pages component
 */

import { Component, OnInit, OnDestroy, ChangeDetectorRef, ViewChild, AfterViewInit } from '@angular/core';
import APP_CONFIG from 'src/app/config';
import { MediaMatcher } from '@angular/cdk/layout';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { Subject, Observable } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSnackBar, MatSidenav } from '@angular/material';
import { Router } from '@angular/router';
import { IUser } from 'src/app/core/domain/models/user.interface';
import { roles } from 'src/app/common/enums/role.enum';
import { ThemeService } from 'src/app/common/services/theme/theme.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit, OnDestroy, AfterViewInit {
  unsubscribe$: Subject<void> = new Subject<void>();
  isDarkTheme$: Observable<boolean>;

  title = APP_CONFIG.Name;
  role: Array<string> = [ roles.SUPER, roles.ADMIN ];
  user: IUser;

  // Navbar
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;
  @ViewChild('snav', {static: true}) snav: MatSidenav;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private authService: AuthService,
              private snackBar: MatSnackBar, private router: Router, private themeService: ThemeService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener('change', this.mobileQueryListener);
  }

  ngOnInit() {

    // Set theme
    this.isDarkTheme$ = this.themeService.isDarkTheme$;

    // Set user
    this.authService.currentUser().pipe(takeUntil(this.unsubscribe$)).subscribe((userLogged: IUser) => {
      if (userLogged) {
        this.user = userLogged;
      }
    }, (err: Error) => {
      this.user = null;
      this.openSnackBar('Couldn\'t get the current session.');
    });

    if (!this.mobileQuery.matches) {
      this.snav.toggle();
    }
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeService.getConfig();
    }, 1);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  onLogOut(): void {
    this.authService.unauthorize().pipe(takeUntil(this.unsubscribe$)).subscribe((isUnauthorized: boolean) => {
      if (isUnauthorized) {
        this.openSnackBar('Couldn\'t complete sign out.');
      } else {
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';

        this.router.navigateByUrl(this.router.url);
        window.location.href = this.router.url;
      }
    }, (err: Error) => {
      if (err) { this.openSnackBar(err.message); }
    });
  }

  // UI Helpers
  openSnackBar(message: string, duration?: number | 7000, action?: string): void {
    this.snackBar.open(message);
  }

}

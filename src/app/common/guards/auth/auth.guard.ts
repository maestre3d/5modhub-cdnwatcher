/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Guard for authentication
 */

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subject, of } from 'rxjs';
import { map, takeUntil, catchError } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private unsubscribe$: Subject<void> = new Subject<void>();

  constructor( private authService: AuthService, private router: Router ) {
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.verifyAuth()
      .pipe(takeUntil(this.unsubscribe$))
      .pipe(map(isAuth => {
        if ( isAuth ) {
          if (next.routeConfig.path === 'signin' ) {
            this.router.navigate(['/']);
            return false;
          }

          return true;
        } else {
          if ( next.routeConfig.path === 'signin' ) {
            return true;
          }

          this.router.navigate(['/signin'], { queryParams: { redirectUri: state.url} });
          return false;
        }
      }), catchError((err) => {
        this.router.navigate(['/notfound']);
        return of(true);
      }));
  }

}

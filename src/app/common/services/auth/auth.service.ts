/**
 * @name CDNWatcher
 * @version 1.0.0b
 * @copyright Alonso R. 2019 All rights reserved.
 * @license MIT
 * @author Maestre3D
 * @description Service for authentication
 */

import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { IAuthService } from 'src/app/core/auth/authservice.interface';
import { Observable, Subscriber, Subject, throwError, EMPTY } from 'rxjs';
import { IUser } from 'src/app/core/domain/models/user.interface';
import { USERS } from '../../mocks/user.mock';
import { UserService } from '../user/user.service';
import { switchMap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements IAuthService {

  constructor(private cookieService: CookieService, private userService: UserService) {
  }

  authenticate(usernamePayload: string, passwordPayload: string): Observable<any> {
    // Get users from API
    return this.userService.getByUsername(usernamePayload).pipe(switchMap(user => {
        if (user && user.password === passwordPayload) {
          return new Observable<IUser>((subscriber: Subscriber<any>) => {
            try {
              this.cookieService.set('credentials', JSON.stringify(user), 7);
              subscriber.next(JSON.parse(this.cookieService.get('credentials')));
              subscriber.complete();
            } catch (error) {
              subscriber.error(error);
              subscriber.complete();
            }
          });
        }

        return new Observable<any>((subscriber: Subscriber<any>) => {
          subscriber.next(null);
          subscriber.complete();
        });
      }
    ), catchError((err: any) => {
      return new Observable<any>((subscriber: Subscriber<any>) => {
        subscriber.error(err);
        subscriber.complete();
      });
    }));
  }

  verifyAuth(): Observable<boolean> {
    return new Observable((subscriber: Subscriber<any>) => {
      subscriber.next(this.cookieService.check('credentials'));
      subscriber.complete();
    });
  }

  changePassword(userId: number, oldPassword: string, newPassword: string): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  forceChangePassword(userId: number, password: string): Observable<boolean> {
    throw new Error('Method not implemented.');
  }

  currentUser(): Observable<IUser> {
    return new Observable<IUser>((subscriber: Subscriber<any>) => {
      subscriber.next(JSON.parse(this.cookieService.get('credentials')));
      subscriber.complete();
    });
  }

  unauthorize(): Observable<boolean> {
    return new Observable<boolean>((subscriber: Subscriber<any>) => {
      this.cookieService.delete('credentials');
      subscriber.next(this.cookieService.check('crendentials'));
      subscriber.complete();
    });
  }

}

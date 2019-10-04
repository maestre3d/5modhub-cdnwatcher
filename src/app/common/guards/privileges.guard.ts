import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { AuthService } from '../services/auth/auth.service';
import { IUser } from 'src/app/core/domain/models/user.interface';
import { map } from 'rxjs/operators';
import { roles } from '../enums/role.enum';

@Injectable({
  providedIn: 'root'
})
export class PrivilegesGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.authService.currentUser().pipe(map((user: IUser) => {
      if ( user && (user.role === roles.SUPER || user.role === roles.ADMIN) ) {
        return true;
      } else {
        this.router.navigate(['/notfound']);
        return false;
      }
    }));
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/domain/models/user.interface';
import { ErrorStateMatcherHelper } from 'src/app/helpers/ui/errorstate.helper';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { Router } from '@angular/router';
import { Subject, EMPTY } from 'rxjs';
import { takeUntil, switchMap, catchError } from 'rxjs/operators';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  // Two-Way model
  user: IUser;

  // One-Way props
  incorrectUserMessage: string = null;

  // Form
  signInGroup = new FormGroup({
    userControl: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Z0-9\-_.\s@]+$')
    ]),
    passwordControl : new FormControl('', [
      Validators.required
    ])
  });

  // Observer
  private unsubscribe$ = new Subject<void>();

  userMatcher = new ErrorStateMatcherHelper();
  passwordMatcher = new ErrorStateMatcherHelper();

  // UI
  hide = true;
  isLoading = false;

  constructor(private authService: AuthService, private router: Router) {
  }

  ngOnInit() {
  }

  onAuth(): void {
    this.isLoading = true;

    this.authService.authenticate(this.signInGroup.get('userControl').value, this.signInGroup.get('passwordControl').value)
      .pipe(takeUntil(this.unsubscribe$)).pipe(switchMap(userVal => {
        if (userVal !== null) {
          return this.authService.currentUser()
            .pipe(takeUntil(this.unsubscribe$));
        } else {
          this.incorrectUserMessage = 'User/Password is incorrect.';
          this.isLoading = false;
          return EMPTY;
        }
      }), catchError((err: any) => {
        this.incorrectUserMessage = 'User/Password is incorrect.';
        this.isLoading = false;
        return EMPTY;
      })).subscribe(userDB => {
        if (userDB !== null) {
          this.user = userDB;
          this.incorrectUserMessage = null;
          this.isLoading = false;
          this.router.navigate(['/']);
        } else {
          this.incorrectUserMessage = 'User/Password is incorrect.';
          this.isLoading = false;
        }
      });
  }

}

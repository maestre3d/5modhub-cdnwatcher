import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IUser } from 'src/app/core/domain/models/user.interface';
import { ErrorStateMatcherHelper } from 'src/app/helpers/ui/errorstate.helper';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subject, EMPTY, Observable } from 'rxjs';
import { takeUntil, switchMap, catchError } from 'rxjs/operators';
import { ThemeService } from 'src/app/common/services/theme/theme.service';
import APP_CONFIG from 'src/app/config';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit, AfterViewInit {
  // Theme
  isDarkTheme$: Observable<boolean>;
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
  title = APP_CONFIG.Name;
  company = APP_CONFIG.Company;
  year = new Date().getFullYear();

  redirectUri: string;

  constructor(private authService: AuthService, private router: Router, private themeService: ThemeService,
              private route: ActivatedRoute ) {
  }

  ngOnInit() {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
    this.route.queryParams.pipe(takeUntil(this.unsubscribe$))
        .subscribe((query: any) => {
          this.redirectUri = query.redirectUri;
        });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeService.getConfig();
    }, 1);
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
          if ( this.redirectUri ) {
            this.router.navigate([this.redirectUri]);
          } else {
            this.router.navigate(['/']);
          }
        } else {
          this.incorrectUserMessage = 'User/Password is incorrect.';
          this.isLoading = false;
        }
      });
  }

}

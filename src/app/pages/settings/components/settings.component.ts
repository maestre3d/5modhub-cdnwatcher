import { Component, OnInit, OnDestroy, AfterViewInit } from '@angular/core';
import { IUser } from 'src/app/core/domain/models/user.interface';
import { Subject, Observable } from 'rxjs';
import { AuthService } from 'src/app/common/services/auth/auth.service';
import { takeUntil } from 'rxjs/operators';
import { ThemeService } from 'src/app/common/services/theme/theme.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy, AfterViewInit {
  user: IUser;
  isDarkTheme$: Observable<boolean>;

  subject$: Subject<void> = new Subject<void>();

  constructor(private authService: AuthService, private themeService: ThemeService) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$;
    this.authService.currentUser().pipe(takeUntil(this.subject$))
        .subscribe((userCookie: IUser) => {
          this.user = userCookie;
        });
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.themeService.getConfig();
    }, 1);
  }

  toggleDarkTheme(checked: boolean): void {
    this.themeService.setDarkTheme(checked);
  }

  ngOnDestroy(): void {
    this.subject$.next();
    this.subject$.unsubscribe();
  }

}

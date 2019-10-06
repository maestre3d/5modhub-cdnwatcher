import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkTheme = new Subject<boolean>();
  isDarkTheme$ = this.darkTheme.asObservable();

  setDarkTheme(isDarkTheme: boolean): void {
    this.darkTheme.next(isDarkTheme);
  }

  getConfig() {
    const darkBoolean = localStorage.getItem('DarkTheme') === 'true' ? true : false;
    this.setDarkTheme(darkBoolean);
  }

}

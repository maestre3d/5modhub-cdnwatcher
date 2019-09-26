import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import APP_CONFIG from 'src/app/config';
import { map } from 'rxjs/operators';
import { IUser } from 'src/app/core/domain/models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private URI = 'user';

  constructor(private http: HttpClient) { }

  getAll(): Observable<Array<IUser>> {
    return this.http.get(`${APP_CONFIG.API_URL}/${this.URI}`).pipe(map((users: any) => users));
  }

  getByUsername(username: string): Observable<IUser> {
    return this.http.get(`${APP_CONFIG.API_URL}/${this.URI}/${username}`).pipe(map((user: any) => user));
  }
}

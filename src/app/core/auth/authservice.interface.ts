import { Observable } from 'rxjs';
import { IUser } from '../domain/models/user.interface';

export interface IAuthService {
    authenticate( username: string, password: string ): Observable<IUser>;
    verifyAuth(): Observable<boolean>;
    changePassword( userId: number, oldPassword: string, newPassword: string ): Observable<boolean>;
    forceChangePassword( userId: number, password: string ): Observable<boolean>;
    currentUser(): Observable<IUser>;
    unauthorize(): Observable<boolean>;
}

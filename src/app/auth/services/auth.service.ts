import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
    login(): Observable<any> {
        return of('ok');
    }

    register(): Observable<any> {
        return of('ok');
    }

    loginWithGoogle(): Observable<any> {
        return of('ok');
    }
}

import { Component } from '@angular/core';
import { AuthCommon } from '../common/auth-common';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends AuthCommon {
    login() {
        this.authService.login().subscribe(() => {
            this.router.navigate(['./home']);
        });
    }

    loginWithGoogle() {
        this.authService.loginWithGoogle().subscribe();
    }

    register() {
        this.router.navigate(['./register'], {
            relativeTo: this.activatedRoute.parent,
        });
    }
}

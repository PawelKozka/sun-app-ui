import { Component } from '@angular/core';
import { AuthCommon } from '../common/auth-common';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss'],
})
export class RegisterComponent extends AuthCommon {
    login() {
        this.router.navigate(['./login'], {
            relativeTo: this.activatedRoute.parent,
        });
    }

    loginWithGoogle() {
        this.authService.loginWithGoogle().subscribe();
    }

    register() {
        this.authService.register().subscribe();
    }
}

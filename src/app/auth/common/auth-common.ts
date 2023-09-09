import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

export abstract class AuthCommon {
    authService: AuthService = inject(AuthService);
    router: Router = inject(Router);
    activatedRoute: ActivatedRoute = inject(ActivatedRoute);

    abstract login(): void;
    abstract loginWithGoogle(): void;
    abstract register(): void;
}

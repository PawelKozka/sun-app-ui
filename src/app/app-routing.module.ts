import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { MainModule } from './main/main.module';

const routes: Routes = [
    {
        path: '',
        loadChildren: () =>
            import('./main/main.module').then((m) => m.MainModule),
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.module').then((m) => m.AuthModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes), AuthModule, MainModule],
    exports: [RouterModule],
})
export class AppRoutingModule {}

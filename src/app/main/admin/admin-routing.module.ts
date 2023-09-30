import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: 'admin',
        redirectTo: 'admin/home',
        pathMatch: 'full',
    },
    {
        path: 'admin',
        children: [
            {
                path: 'home',
                component: AdminHomeComponent,
            },
        ],
    },
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule {}

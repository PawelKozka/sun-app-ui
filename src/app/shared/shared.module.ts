import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { SideMenuMainComponent } from './components/side-menu/side-menu-main/side-menu-main.component';

@NgModule({
    declarations: [SideMenuComponent, SideMenuMainComponent],
    imports: [CommonModule, MatInputModule, MatButtonModule],
    exports: [CommonModule, MatInputModule, MatButtonModule, SideMenuComponent],
})
export class SharedModule {}

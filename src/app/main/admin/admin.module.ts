import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

@NgModule({
    declarations: [AdminHomeComponent],
    imports: [CommonModule, SharedModule, AdminRoutingModule],
})
export class AdminModule {}

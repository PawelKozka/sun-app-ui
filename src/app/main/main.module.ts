import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MainRoutingModule } from './main-routing.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
    declarations: [HomeComponent],
    imports: [CommonModule, MainRoutingModule, MatButtonModule],
})
export class MainModule {}

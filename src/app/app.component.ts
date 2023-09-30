import { Component, HostListener } from '@angular/core';
import { ScreenResolutionService } from './shared/services/screen-resolution.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    constructor(private screenResolutionService: ScreenResolutionService) {}

    @HostListener('window:resize', [])
    onWindowResize() {
        this.screenResolutionService.onWindowResize();
    }
}

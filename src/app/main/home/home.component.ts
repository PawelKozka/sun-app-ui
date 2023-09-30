import { Component, inject } from '@angular/core';
import { ScreenResolutionService } from '../../shared/services/screen-resolution.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
    private screenResolutionService: ScreenResolutionService = inject(
        ScreenResolutionService
    );
    get screenResolution$() {
        return this.screenResolutionService.currentResolutionType$;
    }
}

import { Component } from '@angular/core';
import { SidePanelService } from '../../../shared/components/side-menu/side-panel.service';
import { Observable, tap } from 'rxjs';
import {
    ScreenResolution,
    ScreenResolutionService,
} from '../../../shared/services/screen-resolution.service';

@Component({
    selector: 'app-admin-home',
    templateUrl: './admin-home.component.html',
    styleUrls: ['./admin-home.component.scss'],
})
export class AdminHomeComponent {
    constructor(
        private sidePanelService: SidePanelService,
        private screenResolutionService: ScreenResolutionService
    ) {}

    get screenResolutionType$() {
        return this.screenResolutionService.currentResolutionType$;
    }
    get isSidePanelOpen(): Observable<boolean> {
        return this.sidePanelService.isOpen$;
    }
    openSidebar() {
        this.sidePanelService.open();
    }

    protected readonly ScreenResolution = ScreenResolution;
}

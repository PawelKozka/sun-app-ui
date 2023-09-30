import { Component, inject } from '@angular/core';
import { SidePanelService } from './side-panel.service';
import {
    ScreenResolution,
    ScreenResolutionService,
} from '../../services/screen-resolution.service';
import { combineLatest, map, Observable } from 'rxjs';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    private sidePanelService: SidePanelService = inject(SidePanelService);
    private screenResolutionService: ScreenResolutionService = inject(
        ScreenResolutionService
    );

    get isMobileViewAndOpenedSidePanel$(): Observable<boolean> {
        return combineLatest([
            this.screenResolutionService.currentResolutionType$,
            this.sidePanelService.isOpen$,
        ]).pipe(
            map(
                ([resolution, isOpen]) =>
                    resolution === ScreenResolution.MOBILE && isOpen
            )
        );
    }

    close() {
        this.sidePanelService.close();
    }
}

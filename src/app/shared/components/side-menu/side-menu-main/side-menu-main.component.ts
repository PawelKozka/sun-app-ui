import { Component, inject } from '@angular/core';
import { SidePanelService } from '../side-panel.service';
import { ScreenResolutionService } from '../../../services/screen-resolution.service';

@Component({
    selector: 'app-side-menu-main',
    templateUrl: './side-menu-main.component.html',
    styleUrls: ['./side-menu-main.component.scss'],
})
export class SideMenuMainComponent {
    private sidePanelService: SidePanelService = inject(SidePanelService);
}

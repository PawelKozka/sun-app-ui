import { Component } from '@angular/core';
import { SidePanelService } from './side-panel.service';

@Component({
    selector: 'app-side-menu',
    templateUrl: './side-menu.component.html',
    styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent {
    constructor(private sidePanelService: SidePanelService) {}

    close() {
        this.sidePanelService.close();
    }
}

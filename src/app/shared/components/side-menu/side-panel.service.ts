import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SidePanelService {
    private isOpen = new BehaviorSubject(false);
    public isOpen$ = this.isOpen.asObservable();

    close(): void {
        this.isOpen.next(false);
    }

    open(): void {
        this.isOpen.next(true);
    }
}

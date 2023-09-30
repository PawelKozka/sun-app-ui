import { HostListener, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ScreenResolutionService {
    private currentResolutionTypeSubject = new BehaviorSubject(
        ScreenResolution.MOBILE
    );
    public currentResolutionType$ =
        this.currentResolutionTypeSubject.asObservable();
    constructor() {
        this.setCurrentResolution();
    }
    onWindowResize() {
        this.setCurrentResolution();
    }

    private setCurrentResolution() {
        this.currentResolutionTypeSubject.next(
            window.innerWidth > 1280
                ? ScreenResolution.DESKTOP
                : ScreenResolution.MOBILE
        );
    }
}

export enum ScreenResolution {
    DESKTOP = 'DESKTOP',
    MOBILE = 'MOBILE',
}

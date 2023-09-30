import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuMainComponent } from './side-menu-main.component';

describe('SideMenuMainComponent', () => {
    let component: SideMenuMainComponent;
    let fixture: ComponentFixture<SideMenuMainComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SideMenuMainComponent],
        });
        fixture = TestBed.createComponent(SideMenuMainComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

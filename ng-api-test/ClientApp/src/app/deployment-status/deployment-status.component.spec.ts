/// <reference path="../../../../node_modules/@types/jasmine/index.d.ts" />
import { TestBed, async, ComponentFixture, ComponentFixtureAutoDetect } from '@angular/core/testing';
import { BrowserModule, By } from "@angular/platform-browser";
import { DeploymentStatusComponent } from './deployment-status.component';

let component: DeploymentStatusComponent;
let fixture: ComponentFixture<DeploymentStatusComponent>;

describe('DeploymentStatus component', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ DeploymentStatusComponent ],
            imports: [ BrowserModule ],
            providers: [
                { provide: ComponentFixtureAutoDetect, useValue: true }
            ]
        });
        fixture = TestBed.createComponent(DeploymentStatusComponent);
        component = fixture.componentInstance;
    }));

    it('should do something', async(() => {
        expect(true).toEqual(true);
    }));
});
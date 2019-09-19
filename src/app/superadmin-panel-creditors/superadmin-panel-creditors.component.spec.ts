import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminPanelCreditorsComponent } from './superadmin-panel-creditors.component';

describe('SuperadminPanelCreditorsComponent', () => {
  let component: SuperadminPanelCreditorsComponent;
  let fixture: ComponentFixture<SuperadminPanelCreditorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminPanelCreditorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminPanelCreditorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

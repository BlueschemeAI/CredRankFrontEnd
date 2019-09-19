import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminPanelHomeComponent } from './superadmin-panel-home.component';

describe('SuperadminPanelHomeComponent', () => {
  let component: SuperadminPanelHomeComponent;
  let fixture: ComponentFixture<SuperadminPanelHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminPanelHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminPanelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

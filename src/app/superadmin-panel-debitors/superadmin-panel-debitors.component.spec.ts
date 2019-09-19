import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperadminPanelDebitorsComponent } from './superadmin-panel-debitors.component';

describe('SuperadminPanelDebitorsComponent', () => {
  let component: SuperadminPanelDebitorsComponent;
  let fixture: ComponentFixture<SuperadminPanelDebitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperadminPanelDebitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperadminPanelDebitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

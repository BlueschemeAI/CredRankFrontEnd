import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDisputesComponent } from './agency-disputes.component';

describe('AgencyDisputesComponent', () => {
  let component: AgencyDisputesComponent;
  let fixture: ComponentFixture<AgencyDisputesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyDisputesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyDisputesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

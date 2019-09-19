import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyDebitorsComponent } from './agency-debitors.component';

describe('AgencyDebitorsComponent', () => {
  let component: AgencyDebitorsComponent;
  let fixture: ComponentFixture<AgencyDebitorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyDebitorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyDebitorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

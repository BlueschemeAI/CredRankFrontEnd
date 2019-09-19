import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyHomePageComponent } from './agency-home-page.component';

describe('AgencyHomePageComponent', () => {
  let component: AgencyHomePageComponent;
  let fixture: ComponentFixture<AgencyHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

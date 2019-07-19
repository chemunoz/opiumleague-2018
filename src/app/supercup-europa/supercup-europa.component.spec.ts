import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercupEuropaComponent } from './supercup-europa.component';

describe('SupercupEuropaComponent', () => {
  let component: SupercupEuropaComponent;
  let fixture: ComponentFixture<SupercupEuropaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercupEuropaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercupEuropaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

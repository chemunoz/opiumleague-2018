import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupercupOpiumComponent } from './supercup-opium.component';

describe('SupercupOpiumComponent', () => {
  let component: SupercupOpiumComponent;
  let fixture: ComponentFixture<SupercupOpiumComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupercupOpiumComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupercupOpiumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UefaComponent } from './uefa.component';

describe('UefaComponent', () => {
  let component: UefaComponent;
  let fixture: ComponentFixture<UefaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UefaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UefaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

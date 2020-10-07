import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableFriendsComponent } from './table-friends.component';

describe('TableFriendsComponent', () => {
  let component: TableFriendsComponent;
  let fixture: ComponentFixture<TableFriendsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableFriendsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableFriendsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

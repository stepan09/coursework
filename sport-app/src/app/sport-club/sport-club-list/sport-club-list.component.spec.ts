import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportClubListComponent } from './sport-club-list.component';

describe('SportClubListComponent', () => {
  let component: SportClubListComponent;
  let fixture: ComponentFixture<SportClubListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportClubListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportClubListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

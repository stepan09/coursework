import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsmanListComponent } from './sportsman-list.component';

describe('SportsmanListComponent', () => {
  let component: SportsmanListComponent;
  let fixture: ComponentFixture<SportsmanListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsmanListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsmanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

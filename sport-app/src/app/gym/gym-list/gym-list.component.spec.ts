import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymListComponent } from './gym-list.component';

describe('GymListComponent', () => {
  let component: GymListComponent;
  let fixture: ComponentFixture<GymListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

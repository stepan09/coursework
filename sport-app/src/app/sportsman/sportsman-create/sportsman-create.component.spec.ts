import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsmanCreateComponent } from './sportsman-create.component';

describe('SportsmanCreateComponent', () => {
  let component: SportsmanCreateComponent;
  let fixture: ComponentFixture<SportsmanCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsmanCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsmanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

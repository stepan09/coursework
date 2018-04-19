import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportKindComponent } from './sport-kind.component';

describe('SportKindComponent', () => {
  let component: SportKindComponent;
  let fixture: ComponentFixture<SportKindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportKindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportKindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

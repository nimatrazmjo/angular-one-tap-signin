import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneTapComponent } from './one-tap.component';

describe('OneTapComponent', () => {
  let component: OneTapComponent;
  let fixture: ComponentFixture<OneTapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneTapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneTapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

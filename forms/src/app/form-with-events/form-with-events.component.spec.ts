import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithEventsComponent } from './form-with-events.component';

describe('FormWithEventsComponent', () => {
  let component: FormWithEventsComponent;
  let fixture: ComponentFixture<FormWithEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

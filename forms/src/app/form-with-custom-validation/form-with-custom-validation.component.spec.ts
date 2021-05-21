import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithCustomValidationComponent } from './form-with-custom-validation.component';

describe('FormWithCustomValidationComponent', () => {
  let component: FormWithCustomValidationComponent;
  let fixture: ComponentFixture<FormWithCustomValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithCustomValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithCustomValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

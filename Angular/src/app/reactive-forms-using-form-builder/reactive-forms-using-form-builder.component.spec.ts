import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsUsingFormBuilderComponent } from './reactive-forms-using-form-builder.component';

describe('ReactiveFormsUsingFormBuilderComponent', () => {
  let component: ReactiveFormsUsingFormBuilderComponent;
  let fixture: ComponentFixture<ReactiveFormsUsingFormBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsUsingFormBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactiveFormsUsingFormBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudArrayOfObjectComponent } from './crud-array-of-object.component';

describe('CrudArrayOfObjectComponent', () => {
  let component: CrudArrayOfObjectComponent;
  let fixture: ComponentFixture<CrudArrayOfObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrudArrayOfObjectComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudArrayOfObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

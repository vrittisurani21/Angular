import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentmini1Component } from './contentmini1.component';

describe('Contentmini1Component', () => {
  let component: Contentmini1Component;
  let fixture: ComponentFixture<Contentmini1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentmini1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentmini1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

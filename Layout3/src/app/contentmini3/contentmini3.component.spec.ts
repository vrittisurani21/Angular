import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentmini3Component } from './contentmini3.component';

describe('Contentmini3Component', () => {
  let component: Contentmini3Component;
  let fixture: ComponentFixture<Contentmini3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentmini3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentmini3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

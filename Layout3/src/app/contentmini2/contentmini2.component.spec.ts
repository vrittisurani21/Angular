import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentmini2Component } from './contentmini2.component';

describe('Contentmini2Component', () => {
  let component: Contentmini2Component;
  let fixture: ComponentFixture<Contentmini2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentmini2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentmini2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

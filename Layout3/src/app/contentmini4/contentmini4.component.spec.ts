import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contentmini4Component } from './contentmini4.component';

describe('Contentmini4Component', () => {
  let component: Contentmini4Component;
  let fixture: ComponentFixture<Contentmini4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contentmini4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Contentmini4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

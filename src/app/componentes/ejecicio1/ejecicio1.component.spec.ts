import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejecicio1Component } from './ejecicio1.component';

describe('Ejecicio1Component', () => {
  let component: Ejecicio1Component;
  let fixture: ComponentFixture<Ejecicio1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejecicio1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejecicio1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

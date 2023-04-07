import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Eventdo2Component } from './eventdo2.component';

describe('Eventdo2Component', () => {
  let component: Eventdo2Component;
  let fixture: ComponentFixture<Eventdo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Eventdo2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Eventdo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventdoComponent } from './eventdo1.component';

describe('EventdoComponent', () => {
  let component: EventdoComponent;
  let fixture: ComponentFixture<EventdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

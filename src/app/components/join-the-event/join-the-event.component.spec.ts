import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheEventComponent } from './join-the-event.component';

describe('JoinTheEventComponent', () => {
  let component: JoinTheEventComponent;
  let fixture: ComponentFixture<JoinTheEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinTheEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinTheEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

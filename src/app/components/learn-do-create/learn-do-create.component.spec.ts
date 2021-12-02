import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnDoCreateComponent } from './learn-do-create.component';

describe('LearnDoCreateComponent', () => {
  let component: LearnDoCreateComponent;
  let fixture: ComponentFixture<LearnDoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LearnDoCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnDoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

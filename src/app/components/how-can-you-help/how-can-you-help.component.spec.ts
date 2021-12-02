import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HowCanYouHelpComponent } from './how-can-you-help.component';

describe('HowCanYouHelpComponent', () => {
  let component: HowCanYouHelpComponent;
  let fixture: ComponentFixture<HowCanYouHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HowCanYouHelpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HowCanYouHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

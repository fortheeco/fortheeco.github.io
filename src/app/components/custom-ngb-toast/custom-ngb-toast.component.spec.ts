import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomNgbToastComponent } from './custom-ngb-toast.component';

describe('CustomNgbToastComponent', () => {
  let component: CustomNgbToastComponent;
  let fixture: ComponentFixture<CustomNgbToastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomNgbToastComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomNgbToastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

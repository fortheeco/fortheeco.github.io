import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDonationsComponent } from './make-donations.component';

describe('MakeDonationsComponent', () => {
  let component: MakeDonationsComponent;
  let fixture: ComponentFixture<MakeDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

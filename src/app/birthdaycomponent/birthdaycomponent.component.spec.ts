import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdaycomponentComponent } from './birthdaycomponent.component';

describe('BirthdaycomponentComponent', () => {
  let component: BirthdaycomponentComponent;
  let fixture: ComponentFixture<BirthdaycomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BirthdaycomponentComponent]
    });
    fixture = TestBed.createComponent(BirthdaycomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

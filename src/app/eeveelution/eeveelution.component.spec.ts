import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EeveelutionComponent } from './eeveelution.component';

describe('EeveelutionComponent', () => {
  let component: EeveelutionComponent;
  let fixture: ComponentFixture<EeveelutionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EeveelutionComponent]
    });
    fixture = TestBed.createComponent(EeveelutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

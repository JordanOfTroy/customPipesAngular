import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesForFunComponent } from './pipes-for-fun.component';

describe('PipesForFunComponent', () => {
  let component: PipesForFunComponent;
  let fixture: ComponentFixture<PipesForFunComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PipesForFunComponent]
    });
    fixture = TestBed.createComponent(PipesForFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

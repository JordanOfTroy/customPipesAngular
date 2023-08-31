import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomPipeComponent } from './my-custom-pipe.component';

describe('MyCustomPipeComponent', () => {
  let component: MyCustomPipeComponent;
  let fixture: ComponentFixture<MyCustomPipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomPipeComponent]
    });
    fixture = TestBed.createComponent(MyCustomPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

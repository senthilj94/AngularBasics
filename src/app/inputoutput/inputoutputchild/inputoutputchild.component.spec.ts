import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutputchildComponent } from './inputoutputchild.component';

describe('InputoutputchildComponent', () => {
  let component: InputoutputchildComponent;
  let fixture: ComponentFixture<InputoutputchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputoutputchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputoutputchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

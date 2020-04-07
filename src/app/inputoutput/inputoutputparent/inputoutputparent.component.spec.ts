import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputoutputparentComponent } from './inputoutputparent.component';

describe('InputoutputparentComponent', () => {
  let component: InputoutputparentComponent;
  let fixture: ComponentFixture<InputoutputparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputoutputparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputoutputparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyleschildComponent } from './styleschild.component';

describe('StyleschildComponent', () => {
  let component: StyleschildComponent;
  let fixture: ComponentFixture<StyleschildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyleschildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyleschildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

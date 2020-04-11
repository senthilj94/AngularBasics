import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylesparentComponent } from './stylesparent.component';

describe('StylesparentComponent', () => {
  let component: StylesparentComponent;
  let fixture: ComponentFixture<StylesparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylesparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

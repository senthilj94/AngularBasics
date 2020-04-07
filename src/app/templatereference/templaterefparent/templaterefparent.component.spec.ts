import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplaterefparentComponent } from './templaterefparent.component';

describe('TemplaterefparentComponent', () => {
  let component: TemplaterefparentComponent;
  let fixture: ComponentFixture<TemplaterefparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplaterefparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplaterefparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

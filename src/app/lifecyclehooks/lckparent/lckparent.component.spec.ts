import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LckparentComponent } from './lckparent.component';

describe('LckparentComponent', () => {
  let component: LckparentComponent;
  let fixture: ComponentFixture<LckparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LckparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LckparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

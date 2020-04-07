import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LckchildComponent } from './lckchild.component';

describe('LckchildComponent', () => {
  let component: LckchildComponent;
  let fixture: ComponentFixture<LckchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LckchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LckchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

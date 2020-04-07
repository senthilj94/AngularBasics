import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StructdirparentComponent } from './structdirparent.component';

describe('StructdirparentComponent', () => {
  let component: StructdirparentComponent;
  let fixture: ComponentFixture<StructdirparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StructdirparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StructdirparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

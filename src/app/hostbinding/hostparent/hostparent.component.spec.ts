import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostparentComponent } from './hostparent.component';

describe('HostparentComponent', () => {
  let component: HostparentComponent;
  let fixture: ComponentFixture<HostparentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostparentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

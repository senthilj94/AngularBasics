import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HostchildComponent } from './hostchild.component';

describe('HostchildComponent', () => {
  let component: HostchildComponent;
  let fixture: ComponentFixture<HostchildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HostchildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HostchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

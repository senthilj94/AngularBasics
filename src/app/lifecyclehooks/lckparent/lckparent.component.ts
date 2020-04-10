import { Component, OnInit, OnDestroy, Input, OnChanges, DoCheck, AfterViewInit, ViewChild, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';
import { LckchildComponent } from '../lckchild/lckchild.component';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lckparent',
  templateUrl: './lckparent.component.html',
  styleUrls: ['./lckparent.component.scss']
})
export class LckparentComponent implements OnInit, OnDestroy, OnChanges,
DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() parentName: string;
  @ViewChild(LckchildComponent) viewChild: LckchildComponent;
  constructor() { }

  ngOnInit(): void {
    // console.log('View Child', this.viewChild);
    console.log('Parent On Init');
  }

  ngOnChanges() {
    console.log('Parent On Changes');
  }

  ngDoCheck() {
    console.log('Parent Do Check');
  }

  ngAfterContentInit() {
    console.log('Parent After ContentInit');
  }

  ngAfterContentChecked() {
    console.log('Parent After Content Checked');
  }

  ngAfterViewInit() {
    // console.log('View Child', this.viewChild.childProperty);
    console.log('Parent After ViewInit');
  }

  ngAfterViewChecked() {
    console.log('Parent After View Checked');
  }

  ngOnDestroy() {
    console.log('Parent On Destroy');
  }
}

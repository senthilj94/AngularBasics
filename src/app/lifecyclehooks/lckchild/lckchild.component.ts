import { Component, OnInit, OnDestroy, Input, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-lckchild',
  templateUrl: './lckchild.component.html',
  styleUrls: ['./lckchild.component.scss']
})
export class LckchildComponent implements OnInit, OnDestroy, OnChanges, 
DoCheck, AfterViewInit, AfterViewChecked, AfterContentInit, AfterContentChecked {

  @Input() childName: string;
  @Input() type: string;
  childProperty = 'Venba';

  constructor() { }

  ngOnInit(): void {
    console.log( this.type + ' On Init');
  }

  ngOnChanges() {
    console.log(this.type + ' On Changes');
  }

  ngDoCheck() {
    console.log(this.type + ' Do Check');
  }

  ngAfterContentInit() {
    console.log(this.type + ' After ContentInit');
  }

  ngAfterContentChecked() {
    console.log(this.type + ' After Content Checked');
  }

  ngAfterViewInit() {
    console.log(this.type + ' After ViewInit');
  }

  ngAfterViewChecked() {
    console.log(this.type + ' After View Checked');
  }

  ngOnDestroy() {
    console.log(this.type + ' On Destroy');
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inputoutputparent',
  templateUrl: './inputoutputparent.component.html',
  styleUrls: ['./inputoutputparent.component.scss']
})
export class InputoutputparentComponent implements OnInit {

  valueFromChildComponent: string;
  valueFromChildComponentDifferentWay: string;
  constructor() { }

  ngOnInit(): void {
  }

  setValueFromChild(event) {
    console.log('Value from child', event);
    this.valueFromChildComponent = event;
  }
}

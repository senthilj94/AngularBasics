import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-inputoutputchild',
  templateUrl: './inputoutputchild.component.html',
  styleUrls: ['./inputoutputchild.component.scss']
})
export class InputoutputchildComponent implements OnInit {

  // tslint:disable-next-line: no-input-rename
  @Input('valueFromParentAlias') valueFromParent: string;
  @Output() valueFromChild: EventEmitter<any> = new EventEmitter<any>();
  @Input() differentMethod: any; // Send data from child to parent using input property
  constructor() { }

  ngOnInit(): void {
  }

  sendValueToParent() {
    this.differentMethod('Senthil Nathan'); // Send data from child to parent using input property
    this.valueFromChild.emit('Nathan'); // Send value from child to parent using output property
  }
}

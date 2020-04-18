import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  display = true;
  name = 'AngularBasics';
  show = true;

  constructor() {}

  toggle() {
    this.display = !this.display;
  }
}

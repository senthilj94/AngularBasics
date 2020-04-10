import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  name = 'AngularBasics';
  show = true;

  constructor() {}

  toggle() {
    this.show = !this.show;
  }
}

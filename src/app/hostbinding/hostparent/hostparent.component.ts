import { Component, OnInit, HostBinding, HostListener } from '@angular/core';

@Component({
  selector: 'app-hostparent',
  templateUrl: './hostparent.component.html',
  styleUrls: ['./hostparent.component.scss'],

  // host: {
  //   '[style.color]': 'color'
  // }
})
export class HostparentComponent implements OnInit {

  constructor() { }

  // @HostBinding('style.color') color = 'red';

  // @HostListener('click') onClick() {
  //   this.color = 'blue';
  // }

  ngOnInit(): void {
  }

  // change() {
  //   this.color = 'blue';
  // }
}

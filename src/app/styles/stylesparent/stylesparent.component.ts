import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-stylesparent',
  templateUrl: './stylesparent.component.html',
  styleUrls: ['./stylesparent.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class StylesparentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

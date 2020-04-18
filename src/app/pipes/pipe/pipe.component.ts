import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  num = 123456.7892;
  obj = {name: 'senthil', age: '26'};
  name = 'senthil';

  constructor() { }

  ngOnInit(): void {
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent implements OnInit {

  value = '';
  num = 123456.7892;
  obj = {name: 'senthil', age: '26'};
  name = 'senthil';
  users = [{name: 'senthil', gender: 'm'},
           {name: 'bala', gender: 'm'},
           {name: 'neelu', gender: 'f'}];
  constructor() { }

  ngOnInit(): void {
  }

  addUser(value) {
    this.users.push({name: value, gender: 'f'});
    console.log(this.users);
  }
}

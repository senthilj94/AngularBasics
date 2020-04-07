import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structdirparent',
  templateUrl: './structdirparent.component.html',
  styleUrls: ['./structdirparent.component.scss']
})
export class StructdirparentComponent implements OnInit {

  users = null;

  users1 = [
    {name: 'senthil', age: 26, gender: 'm'},
    {name: 'bala', age: 27, gender: 'm'},
    {name: 'neelu', age: 29, gender: 'f'},
    {name: 'ees', age: 50, gender: 'f'},
    {name: 'kumar', age: 43}
  ];

  users2 = [
    {name: 'bala', age: 27, gender: 'm'},
    {name: 'neelu', age: 29, gender: 'f'},
    {name: 'senthil', age: 26, gender: 'm'},
    {name: 'ees', age: 50, gender: 'f'},
    {name: 'kumar', age: 43}
  ];

  constructor() {
    this.users = this.users1;
  }

  ngOnInit(): void {
  }

  order() {
    this.users = this.users[0].name === this.users1[0].name ? this.users2 : this.users1;
  }

  getName(index, user) {
    return user.name;
  }
}

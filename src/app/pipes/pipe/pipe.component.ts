import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, interval, Subscriber } from 'rxjs';
import { map, take } from 'rxjs/operators';

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

  // jsonData = this.http.get('https://jsonplaceholder.typicode.com/todos/1');

  // jsonData = new Promise((resolve, reject) => {
  //   this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  //   .subscribe(x => resolve(x));
  // });

  jsonData = new Observable(subscriber => {
    this.http.get('https://jsonplaceholder.typicode.com/todos/1')
    .subscribe(x => subscriber.next(x));
  });

  date$ = interval(1000).pipe(
    map(x => new Date()),
    take(10)
  );

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  addUser(value) {
    this.users.push({name: value, gender: 'f'});
    console.log(this.users);
  }
}

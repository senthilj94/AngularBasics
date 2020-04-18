import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit, OnDestroy {

 subscription: any;

 test$ = new Observable(subscriber => {
    console.log('test');
    subscriber.next('1');
    subscriber.next('2');
    // subscriber.complete();
    // subscriber.error('error occured');
    subscriber.next('3');
    setTimeout(() => subscriber.next('4'), 1000); // Async Call
  });

  constructor() { }

  ngOnInit(): void {
    console.log('start');
    this.subscription = this.test$.subscribe(x => {
      console.log(x);
    }, error => {
      console.log('error: ', error);
    }, () => {
      console.log('completed');
    });
    console.log('end');

    console.log(this.subscription);
    this.subscription.unsubscribe();
  }

  ngOnDestroy() {
  }
}

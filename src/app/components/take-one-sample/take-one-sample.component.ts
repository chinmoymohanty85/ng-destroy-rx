import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-take-one-sample',
  templateUrl: './take-one-sample.component.html',
  styleUrls: ['./take-one-sample.component.scss']
})
export class TakeOneSampleComponent implements OnInit {
  numbers = interval(1000);
  spitNumbersObservable: Observable<number>;
  constructor() {
    this.spitNumbersObservable = this.numbers.pipe(take(40));
  }

  ngOnInit(): void {
    this.spitNumbersObservable.pipe(take(1)).subscribe(
      n => console.log(`Latest value : ${n}`)
    );
  }
}

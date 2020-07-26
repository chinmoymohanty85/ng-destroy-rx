import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-ng-destroy-takeuntill-sample',
  templateUrl: './ng-destroy-takeuntill-sample.component.html',
  styleUrls: ['./ng-destroy-takeuntill-sample.component.scss']
})
export class NgDestroyTakeuntillSampleComponent implements OnInit, OnDestroy {
  numbers = interval(1000);
  spitNumbersObservable1: Observable<number>;
  spitNumbersObservable2: Observable<number>;
  spitNumbersObservable3: Observable<number>;
  _destroyed$ = new Subject<boolean>();
  constructor() {
    this.spitNumbersObservable1 = this.numbers.pipe(take(40));
    this.spitNumbersObservable2 = this.numbers.pipe(take(40));
    this.spitNumbersObservable3 = this.numbers.pipe(take(40));
  }
  ngOnDestroy(): void {
    this._destroyed$.next(true);
  }

  ngOnInit(): void {
    this.spitNumbersObservable1
      .pipe(takeUntil(this._destroyed$)).subscribe(
        n => console.log(`Latest value : ${n}`)
      );
    this.spitNumbersObservable2
      .pipe(takeUntil(this._destroyed$)).subscribe(
        n => console.log(`Latest value : ${n}`)
      );
    this.spitNumbersObservable3
      .pipe(takeUntil(this._destroyed$)).subscribe(
        n => console.log(`Latest value : ${n}`)
      );
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ng-destroy-unsub-sample',
  templateUrl: './ng-destroy-unsub-sample.component.html',
  styleUrls: ['./ng-destroy-unsub-sample.component.scss']
})
export class NgDestroyUnsubSampleComponent implements OnInit, OnDestroy {
  numbers = interval(1000);
  spitNumbersObservable: Observable<number>;
  private subscription1: Subscription;
  constructor() {
    this.spitNumbersObservable = this.numbers.pipe(take(40));
  }
  ngOnDestroy(): void {
    this.subscription1.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription1 = this.spitNumbersObservable.subscribe(
      n => console.log(`Latest value : ${n}`)
    );
  }
}

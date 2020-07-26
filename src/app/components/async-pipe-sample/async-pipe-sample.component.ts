import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-async-pipe-sample',
  template: `
  <p>async-pipe-sample works!</p>
  <div>
      Latest value : {{ spitNumbersObservable | async }}
  </div>`,
  styleUrls: ['./async-pipe-sample.component.scss']
})
export class AsyncPipeSampleComponent implements OnInit {

  numbers = interval(1000);
  spitNumbersObservable: Observable<number>;
  constructor() {
    this.spitNumbersObservable = this.numbers.pipe(take(40));
  }

  ngOnInit(): void { }
}

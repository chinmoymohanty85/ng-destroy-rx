import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-ng-destroy-sample',
  template: `<p>Ng Destroy Leaky Sample</p>`,
  styleUrls: ['./ng-destroy-sample.component.scss']
})
export class NgDestroySampleComponent implements OnInit {

  numbers = interval(1000);
  spitNumbersObservable: Observable<number>;
  constructor() {
    this.spitNumbersObservable = this.numbers.pipe(take(40));
  }

  ngOnInit(): void {
    this.spitNumbersObservable.subscribe(
      n => console.log(`LEAKY Latest value : ${n}`)
    );
  }
}

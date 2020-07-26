import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDestroyUnsubSampleComponent } from './ng-destroy-unsub-sample.component';

describe('NgDestroyUnsubSampleComponent', () => {
  let component: NgDestroyUnsubSampleComponent;
  let fixture: ComponentFixture<NgDestroyUnsubSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDestroyUnsubSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDestroyUnsubSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDestroyTakeuntillSampleComponent } from './ng-destroy-takeuntill-sample.component';

describe('NgDestroyTakeuntillSampleComponent', () => {
  let component: NgDestroyTakeuntillSampleComponent;
  let fixture: ComponentFixture<NgDestroyTakeuntillSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDestroyTakeuntillSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDestroyTakeuntillSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

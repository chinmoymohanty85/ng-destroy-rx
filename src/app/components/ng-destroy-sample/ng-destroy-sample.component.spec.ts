import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgDestroySampleComponent } from './ng-destroy-sample.component';

describe('NgDestroySampleComponent', () => {
  let component: NgDestroySampleComponent;
  let fixture: ComponentFixture<NgDestroySampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgDestroySampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgDestroySampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

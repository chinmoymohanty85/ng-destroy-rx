import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakeOneSampleComponent } from './take-one-sample.component';

describe('TakeOneSampleComponent', () => {
  let component: TakeOneSampleComponent;
  let fixture: ComponentFixture<TakeOneSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakeOneSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakeOneSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsyncPipeSampleComponent } from './async-pipe-sample.component';

describe('AsyncPipeSampleComponent', () => {
  let component: AsyncPipeSampleComponent;
  let fixture: ComponentFixture<AsyncPipeSampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsyncPipeSampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsyncPipeSampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

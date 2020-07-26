import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AsyncPipeSampleComponent } from './components/async-pipe-sample/async-pipe-sample.component';
import { NgDestroySampleComponent } from './components/ng-destroy-sample/ng-destroy-sample.component';
import { TakeOneSampleComponent } from './components/take-one-sample/take-one-sample.component';
import { NgDestroyUnsubSampleComponent } from './components/ng-destroy-unsub-sample/ng-destroy-unsub-sample.component';
import { NgDestroyTakeuntillSampleComponent } from './components/ng-destroy-takeuntill-sample/ng-destroy-takeuntill-sample.component';

@NgModule({
  declarations: [
    AppComponent,
    AsyncPipeSampleComponent,
    NgDestroySampleComponent,
    TakeOneSampleComponent,
    NgDestroyUnsubSampleComponent,
    NgDestroyTakeuntillSampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

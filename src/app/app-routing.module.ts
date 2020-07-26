import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AsyncPipeSampleComponent } from './components/async-pipe-sample/async-pipe-sample.component';
import { NgDestroySampleComponent } from './components/ng-destroy-sample/ng-destroy-sample.component';
import { TakeOneSampleComponent } from './components/take-one-sample/take-one-sample.component';
import { NgDestroyUnsubSampleComponent } from './components/ng-destroy-unsub-sample/ng-destroy-unsub-sample.component';
import { NgDestroyTakeuntillSampleComponent } from './components/ng-destroy-takeuntill-sample/ng-destroy-takeuntill-sample.component';


const routes: Routes = [
  {
    path: 'async-pipe', component: AsyncPipeSampleComponent
  },
  {
    path: 'ng-destroy', component: NgDestroySampleComponent
  },
  {
    path: 'take-one', component: TakeOneSampleComponent
  },
  {
    path: 'take-untill', component: NgDestroyTakeuntillSampleComponent
  },
  {
    path: 'unsub', component: NgDestroyUnsubSampleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

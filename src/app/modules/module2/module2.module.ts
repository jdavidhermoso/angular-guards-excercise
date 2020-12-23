import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subcomponent2Component} from './components/subcomponent2/subcomponent2.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Subcomponent2Component
  }
];


@NgModule({
  declarations: [Subcomponent2Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module2Module {
}

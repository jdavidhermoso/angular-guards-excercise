import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Subcomponent1Component} from './components/subcomponent1/subcomponent1.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: Subcomponent1Component
  }
];

@NgModule({
  declarations: [Subcomponent1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Module1Module {
}

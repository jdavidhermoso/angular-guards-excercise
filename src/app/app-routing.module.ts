import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {Component1Component} from './components/component1/component1.component';
import {Component2Component} from './components/component2/component2.component';
import {Component3Component} from './components/component3/component3.component';
import {Component4Component} from './components/component4/component4.component';
import {Component5Component} from './components/component5/component5.component';
import {Component6Component} from './components/component6/component6.component';
import {DeactivateGuard} from './guards/deactivate.guard';
import {CanActivateChildGuard} from './guards/can-activate-child.guard';

const routes: Routes = [
  {
    path: 'canactivate',
    loadChildren: () => import('./modules/module1/module1.module').then((m) => m.Module1Module)
  },
  {
    path: 'candeactivate',
    component: Component5Component,
    canDeactivate: [DeactivateGuard]
  },
  {
    path: 'canactivatechild',
    component: Component2Component,
    canActivateChild: [CanActivateChildGuard],
    children: [
      {
        path: 'child1',
        component: Component3Component,
      },
      {
        path: 'child2',
        component: Component4Component
      }
    ]
  },
  {
    path: 'resolve',
    component: Component6Component
  },
  {
    path: 'notresolve',
    component: Component6Component
  },
  {
    path: '',
    component: Component1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

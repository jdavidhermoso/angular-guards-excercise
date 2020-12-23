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
import {DataService} from './services/data.service';
import {ResolveGuardService} from './guards/resolve-guard.service';
import {Component7Component} from './components/component7/component7.component';
import {CanActivateGuard} from './guards/can-activate.guard';
import {CanLoadGuard} from './guards/can-load.guard';

const routes: Routes = [
  {
    path: 'canactivate',
    loadChildren: () => import('./modules/module1/module1.module').then((m) => m.Module1Module),
    canActivate: [CanActivateGuard]
  },
  {
    path: 'canload',
    loadChildren: () => import('./modules/module2/module2.module').then((m) => m.Module2Module),
    canLoad: [CanLoadGuard]
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
    component: Component6Component,
    resolve: {data: ResolveGuardService}
  },
  {
    path: 'notresolve',
    component: Component7Component
  },
  {
    path: '',
    component: Component1Component
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  providers: [DataService, ResolveGuardService],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

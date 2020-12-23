import {Injectable} from '@angular/core';
import {CanLoad, Route, UrlSegment, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CanLoadGuard implements CanLoad {
  constructor(private router: Router, private authService: AuthService) {
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserLoggedIn()
      .pipe(
        tap((isUserLoggedIn: boolean) => {
          if (!isUserLoggedIn) {
            alert('User is not logged in!');
            this.router.navigate(['/']);
          }
        }),
        map((isUserLoggedIn: boolean) => isUserLoggedIn)
      );
  }
}

import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from '../services/auth.service';
import {map, mapTo, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CanActivateGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
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

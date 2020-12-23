import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isUserLoggedIn(): Observable<boolean> {
    return of(false).pipe(delay(4000));
  }
}

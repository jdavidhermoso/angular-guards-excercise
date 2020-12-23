import {Injectable} from '@angular/core';
import {DataService} from '../services/data.service';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResolveGuardService {
  constructor(private dataService: DataService) {
  }

  resolve(route: ActivatedRouteSnapshot,
          state: RouterStateSnapshot): Observable<any> {
    return this.dataService.getData();
  }
}

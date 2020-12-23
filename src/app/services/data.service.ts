import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {mockedData} from '../data.mocked';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public getData(): Observable<any[]> {
    return of(mockedData).pipe(delay(3500));
  }
}

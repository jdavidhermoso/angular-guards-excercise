import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {mockedData} from '../data.mocked';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() {
  }

  public getData(): Observable<any[]> {
    return of(mockedData);
  }
}

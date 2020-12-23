import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-component7',
  templateUrl: './component7.component.html',
  styleUrls: ['./component7.component.css']
})
export class Component7Component implements OnInit {
  public data$: Observable<any[]>;

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.data$ = this.dataService.getData();
  }

}

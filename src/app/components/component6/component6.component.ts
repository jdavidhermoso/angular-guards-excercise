import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-component6',
  templateUrl: './component6.component.html',
  styleUrls: ['./component6.component.css']
})
export class Component6Component implements OnInit {
  public data: any[];

  constructor(private activatedRoute: ActivatedRoute) {
    this.data = this.activatedRoute.snapshot.data['data'];
  }

  ngOnInit(): void {
  }

}

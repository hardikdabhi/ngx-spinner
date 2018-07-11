import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from '../ngx-spinner.types';

@Component({
  selector: 'app-bars',
  templateUrl: './bars.component.html',
  styleUrls: ['./bars.component.scss']
})
export class BarsComponent implements ISpinnerAnimation {
	config;

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from '../ngx-spinner.types';

@Component({
  selector: 'app-spin3',
  templateUrl: './spin3.component.html',
  styleUrls: ['./spin3.component.scss']
})
export class Spin3Component implements ISpinnerAnimation {
	config;

  constructor() { }

  ngOnInit() {
  }

}

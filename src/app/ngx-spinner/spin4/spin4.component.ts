import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from '../ngx-spinner.types';

@Component({
  selector: 'app-spin4',
  templateUrl: './spin4.component.html',
  styleUrls: ['./spin4.component.scss']
})
export class Spin4Component implements ISpinnerAnimation {
	config;

  constructor() { }

  ngOnInit() {
  }

}

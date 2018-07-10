import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from 'dist/public_api';

@Component({
  selector: 'app-spin2',
  templateUrl: './spin2.component.html',
  styleUrls: ['./spin2.component.scss']
})
export class Spin2Component implements ISpinnerAnimation {
	config;

  constructor() { }

  ngOnInit() {
  }

}

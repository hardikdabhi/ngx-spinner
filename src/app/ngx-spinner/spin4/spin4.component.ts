import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from 'dist/public_api';

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

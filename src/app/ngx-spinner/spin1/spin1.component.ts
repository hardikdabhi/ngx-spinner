import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from 'dist/public_api';

@Component({
  selector: 'app-spin1',
  templateUrl: './spin1.component.html',
  styleUrls: ['./spin1.component.scss']
})
export class Spin1Component implements ISpinnerAnimation {
	config;

  constructor() { }

  ngOnInit() {
  }

}

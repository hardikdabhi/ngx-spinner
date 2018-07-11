import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from '../ngx-spinner.types';

@Component({
  selector: 'app-rotating-dots',
  templateUrl: './rotating-dots.component.html',
  styleUrls: ['./rotating-dots.component.scss']
})
export class RotatingDotsComponent implements ISpinnerAnimation {
	config;

  constructor() { }

  ngOnInit() {
  }

}

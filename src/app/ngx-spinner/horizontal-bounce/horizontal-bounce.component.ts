import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation } from '../ngx-spinner.types';

@Component({
  selector: 'app-horizontal-bounce',
  templateUrl: './horizontal-bounce.component.html',
  styleUrls: ['./horizontal-bounce.component.scss']
})
export class HorizontalBounceComponent implements ISpinnerAnimation {
	config;

  constructor() { }

  ngOnInit() {
  }

}

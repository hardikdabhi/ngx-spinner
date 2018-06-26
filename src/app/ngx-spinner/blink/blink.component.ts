import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation, ISpinnerConfig } from '../ngx-spinner.types';

@Component({
  selector: 'spinner-blink',
  templateUrl: './blink.component.html',
  styleUrls: ['./blink.component.scss']
})
export class BlinkComponent implements ISpinnerAnimation {

	config: ISpinnerConfig;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation, ISpinnerConfig } from '../ngx-spinner.types';

@Component({
  selector: 'app-double-bounce',
  templateUrl: './double-bounce.component.html',
  styleUrls: ['./double-bounce.component.scss']
})
export class DoubleBounceComponent implements ISpinnerAnimation {

	config: ISpinnerConfig;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation, ISpinnerConfig } from '../ngx-spinner.types';

@Component({
  selector: 'app-plate-rotate',
  templateUrl: './plate-rotate.component.html',
  styleUrls: ['./plate-rotate.component.scss']
})
export class PlateRotateComponent implements ISpinnerAnimation {

	config: ISpinnerConfig;
  constructor() { }

  ngOnInit() {
  }

}

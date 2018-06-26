import { Component, OnInit } from '@angular/core';
import { ISpinnerAnimation, ISpinnerConfig } from '../ngx-spinner.types';

@Component({
  selector: 'app-folding-cube',
  templateUrl: './folding-cube.component.html',
  styleUrls: ['./folding-cube.component.scss']
})
export class FoldingCubeComponent implements ISpinnerAnimation {

	config: ISpinnerConfig;
  constructor() { }

  ngOnInit() {
  }

}

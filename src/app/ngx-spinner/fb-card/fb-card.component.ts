import { Component, OnInit } from '@angular/core';
import { ISpinnerConfig, ISpinnerAnimation } from '../ngx-spinner.types';

@Component({
  selector: 'app-fb-card',
  templateUrl: './fb-card.component.html',
  styleUrls: ['./fb-card.component.scss']
})
export class FbCardComponent implements ISpinnerAnimation {

	config: ISpinnerConfig;
  constructor() { }

  ngOnInit() {
  }

}

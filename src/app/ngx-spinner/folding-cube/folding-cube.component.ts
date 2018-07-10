import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ISpinnerAnimation, ISpinnerConfig } from '../ngx-spinner.types';

@Component({
  selector: 'app-folding-cube',
  templateUrl: './folding-cube.component.html',
  styleUrls: ['./folding-cube.component.scss']
})
export class FoldingCubeComponent implements ISpinnerAnimation {
	@ViewChild("styles") styles: ElementRef;
	config: ISpinnerConfig;
  constructor() { }

  ngOnInit() {
		this.styles.nativeElement.innerHTML = `<style>.sk-folding-cube .sk-cube:before { background-color: ${this.config.color} }</style>`;
  }

}

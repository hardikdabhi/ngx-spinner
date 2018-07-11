import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ISpinnerAnimation } from '../ngx-spinner.types';

@Component({
  selector: 'app-spin2',
  templateUrl: './spin2.component.html',
  styleUrls: ['./spin2.component.scss']
})
export class Spin2Component implements ISpinnerAnimation {
	@ViewChild("styles") styles: ElementRef;
	config;

  constructor() { }

  ngOnInit() {
		this.styles.nativeElement.innerHTML = `<style>.sk-fading-circle .sk-circle:before { background-color: ${this.config.color} }</style>`;
	}

}

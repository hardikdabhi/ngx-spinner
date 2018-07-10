import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ISpinnerAnimation } from 'dist/public_api';

@Component({
  selector: 'app-spin1',
  templateUrl: './spin1.component.html',
  styleUrls: ['./spin1.component.scss']
})
export class Spin1Component implements ISpinnerAnimation {
	@ViewChild("styles") styles: ElementRef;
	config;

  constructor() { }

  ngOnInit() {
		this.styles.nativeElement.innerHTML = `<style>.sk-circle .sk-child:before { background-color: ${this.config.color} }</style>`;
	}

}

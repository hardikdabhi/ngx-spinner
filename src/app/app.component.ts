import { Component, ViewChild, OnInit } from '@angular/core';
import { NgxSpinner } from './ngx-spinner/ngx-spinner/ngx-spinner.component';
import { SPINNER_PLACEMENT } from 'src/app/ngx-spinner/ngx-spinner.types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
	@ViewChild('sc1') sc1: NgxSpinner;

	blockWindow: boolean;
	
	constructor(){
	}

	ngOnInit(): void {
		
	}

	showMask(){
		this.blockWindow = true;
		setTimeout(() => {
			this.blockWindow = false;
		}, 3000);
	}

}

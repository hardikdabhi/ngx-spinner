import { Component, OnInit, Input } from '@angular/core';
import { NgxSpinnerService } from './ngx-spinner.service';
import { ISpinnerConfig, DEFAULT_CONFIG } from '../ngx-spinner.types';

@Component({
  selector: 'ngx-spinner',
  templateUrl: './ngx-spinner.component.html',
	styleUrls: ['./ngx-spinner.component.scss'],
	host: { '[class]': 'visible?config.placement:""', '[style.background]': 'visible?config.bgColor:""' }
})
export class NgxSpinner {
	private _config: ISpinnerConfig = {};
	private _isVisible: boolean;
	
	constructor(private ngxSpinnerService: NgxSpinnerService) {
		// assign default config
		this.assignConfig(DEFAULT_CONFIG);
		// override wtih globle config
		this.assignConfig(NgxSpinnerService.globalSpinnerConf);
		// hide spinner as default
		this._isVisible = false;
	}

	@Input()
	set visible(condition: any){
		if(condition)
			this.show();
		else
			this.hide();
	}
	get visible(){
		return this._isVisible;
	}
	@Input()
	set config(conf: ISpinnerConfig){
		// override with spinner config
		this.assignConfig(conf);
	}
	get config(){
		return this._config;
	}
	
	show(): void {
		this._isVisible = true;
	}

	hide(): void {
		this._isVisible = false;
	}

	toggle(): void {
		this._isVisible = !this._isVisible;
	}

	private assignConfig(conf: ISpinnerConfig) {
		let cnf = Object.assign(conf);
		for(let prop in cnf){
			if(cnf.hasOwnProperty(prop))
				this._config[prop] = cnf[prop];
		}
	}

}

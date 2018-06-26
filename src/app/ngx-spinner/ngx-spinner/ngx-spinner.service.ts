import { Injectable } from '@angular/core';
import { ISpinnerConfig } from '../ngx-spinner.types';

@Injectable()
export class NgxSpinnerService {
	
	static globalSpinnerConf: ISpinnerConfig = {};

	constructor() { }
	
}

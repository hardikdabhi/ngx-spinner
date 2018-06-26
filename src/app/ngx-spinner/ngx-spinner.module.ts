import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSpinner } from './ngx-spinner/ngx-spinner.component';
import { ISpinnerConfig } from './ngx-spinner.types';
import { NgxSpinnerService } from './ngx-spinner/ngx-spinner.service';
import { SpinnerAnimationDirective } from './spinner-animation.directive';
import { BlinkComponent } from './blink/blink.component';
import { FbCardComponent } from './fb-card/fb-card.component';
import { PlateRotateComponent } from './plate-rotate/plate-rotate.component';
import { DoubleBounceComponent } from './double-bounce/double-bounce.component';
import { FoldingCubeComponent } from './folding-cube/folding-cube.component';

@NgModule({
  imports: [
    CommonModule
	],
	entryComponents: [
		BlinkComponent, FbCardComponent, PlateRotateComponent, DoubleBounceComponent, FoldingCubeComponent
	],
	declarations: [
		SpinnerAnimationDirective, 
		NgxSpinner, 
		BlinkComponent, FbCardComponent, PlateRotateComponent, DoubleBounceComponent, FoldingCubeComponent 
	],
	exports: [ NgxSpinner ],
	providers: [ NgxSpinnerService ]
})
export class NgxSpinnerModule {

	static config(conf: ISpinnerConfig = {}){
		NgxSpinnerService.globalSpinnerConf = Object.assign(conf);
		return this;
	}

}

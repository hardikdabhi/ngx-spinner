import { Directive, Input, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { ISpinnerConfig, SPINNER_ANIMATIONS, ISpinnerAnimation } from './ngx-spinner.types';
import { BlinkComponent } from './blink/blink.component';
import { FbCardComponent } from './fb-card/fb-card.component';
import { PlateRotateComponent } from './plate-rotate/plate-rotate.component';
import { DoubleBounceComponent } from './double-bounce/double-bounce.component';
import { FoldingCubeComponent } from './folding-cube/folding-cube.component';
import { BarsComponent } from './bars/bars.component';
import { RotatingDotsComponent } from './rotating-dots/rotating-dots.component';

@Directive({
  selector: '[spinner-animation]'
})
export class SpinnerAnimationDirective {

	constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }
	
	@Input('spinner-animation')
  set config(conf: ISpinnerConfig){
		this.init(conf);
	}
	
	private init(conf: ISpinnerConfig){
		let componenet = BlinkComponent;
		if(conf.animation==SPINNER_ANIMATIONS.blink){		// blink
			componenet = BlinkComponent;
		} else if(conf.animation==SPINNER_ANIMATIONS.fb_card) {		// fb_card
			componenet = FbCardComponent;
		} else if(conf.animation==SPINNER_ANIMATIONS.plate_rotate) {
			componenet = PlateRotateComponent;
		} else if(conf.animation==SPINNER_ANIMATIONS.double_bounce) {
			componenet = DoubleBounceComponent;
		} else if(conf.animation==SPINNER_ANIMATIONS.folding_cube) {
			componenet = FoldingCubeComponent;
		} else if(conf.animation==SPINNER_ANIMATIONS.bars) {
			componenet = BarsComponent;
		} else if(conf.animation==SPINNER_ANIMATIONS.rotating_dots) {
			componenet = RotatingDotsComponent;
		}

		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(componenet);
		this.viewContainerRef.clear();
		let componentRef: ComponentRef<ISpinnerAnimation> = this.viewContainerRef.createComponent(componentFactory);
		(componentRef.instance).config = conf;
	}

}

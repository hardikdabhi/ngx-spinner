import { Component, OnInit, ViewChild, ComponentFactoryResolver, ViewContainerRef, ComponentRef } from '@angular/core';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig, DEFAULT_CONFIG } from '../ngx-spinner/ngx-spinner.types';
import { NgxSpinnerModule } from '../ngx-spinner/ngx-spinner.module';
import { NgxSpinner } from '../ngx-spinner/ngx-spinner/ngx-spinner.component';

@Component({
  selector: 'spinner-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {
	animations: Array<string> = [];
	placements: Array<string> = [];

	componentRef: ComponentRef<NgxSpinner>;
	@ViewChild("spConfig", {read: ViewContainerRef}) spConfig;
	@ViewChild("spBlockWindow") spBlockWindow: NgxSpinner;
	config: ISpinnerConfig = DEFAULT_CONFIG;
	spBlockUiConfig: ISpinnerConfig;
	spInplaceConfig: ISpinnerConfig;

  constructor(private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
		for(let animation in SPINNER_ANIMATIONS){
			if(isNaN(Number(animation))){
				this.animations.push(animation);
			}
		}
		for(let placement in SPINNER_PLACEMENT){
			if(isNaN(Number(placement))){
				this.placements.push(placement);
			}
		}
		this.createConfigSpinner();
		// block ui spinner
		this.spBlockUiConfig = {
			placement: SPINNER_PLACEMENT.block_ui,
			animation: SPINNER_ANIMATIONS.rotating_dots,
			size: "3rem",
			color: "#1574b3"
		};
		// in-place spinner
		this.spInplaceConfig = {
			animation: SPINNER_ANIMATIONS.spin_3,
			color: "#c31a4f",
			size: "1.8rem"
		};
		// block windwo spinner
		this.spBlockWindow.config = {
			placement: SPINNER_PLACEMENT.block_window,
			animation: SPINNER_ANIMATIONS.plate_rotate,
			size: "4rem",
			color: "#5d8852"
		};
	}
	
	createConfigSpinner(){
		let componentFactory = this.componentFactoryResolver.resolveComponentFactory(NgxSpinner);
		this.spConfig.clear();
		this.componentRef = this.spConfig.createComponent(componentFactory);
		(this.componentRef.instance).config = this.config;
		(this.componentRef.instance).visible = true;
		
		if(this.config.placement==SPINNER_PLACEMENT.block_window)
			setTimeout(() => (this.componentRef.instance).visible = false, 3000);
	}

	blockWindow(){
		this.spBlockWindow.show();
		setTimeout(() => this.spBlockWindow.hide(), 3000);
	}
}

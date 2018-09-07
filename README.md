# @hardpool/ngx-spinner
![Example GIF](https://img.shields.io/badge/support-angular%206.x-brightgreen.svg)  ![Example GIF](https://img.shields.io/badge/support-angular%205.x-brightgreen.svg)

Customizable loading spinner for Angular (version ng 5 and above). Supports multiple instances of spinners with different configurations. Can mask element, portion of UI or complete window.

## Demo
[Click here to see it in action!](https://hardikdabhi.github.io/ngx-spinner/)

## Installation
`npm i @hardpool/ngx-spinner`

## Usage
Import `NgxSpinnerModule` in your module.
``` typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxSpinnerModule } from '@hardpool/ngx-spinner';

@NgModule({
  // ...
  imports: [
	// ...
	NgxSpinnerModule
  ],
  // ...
})
export class AppModule { }
```
Add tag `ngx-spinner` in your component to create a spinner instance.
component.html
``` html
<ngx-spinner [visible]="showSpinner" [config]="spinnerConfig"></ngx-spinner>
<button (click)="showSpinner()">Show Spinner</button>
<button (click)="hideSpinner()">Hide Spinner</button>
```
Control spinner instance using [input parameters](#input-parameters).
component.ts
``` typescript
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';

@Component({
  // ...
})
export class DemoComponent implements OnInit {
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;

  constructor() { }

  ngOnInit() {
	this.spBlockUiConfig = {
		placement: SPINNER_PLACEMENT.block_ui,
		animation: SPINNER_ANIMATIONS.rotating_dots,
		size: "3rem",
		color: "#1574b3"
	};
  }
  
  showSpinner(){
    this.showSpinner = true;
  }
  
  hideSpinner(){
    this.showSpinner = false;
  }
}
```
> Note: Config can be set [globally](#global-config) or [specific to instance](#instance-config). For `SPINNER_PLACEMENT.block_ui` parent element of `<ngx-spinner></ngx-spinner>` must explicitly specify `position: relative`.

## Input Parameters
Below are the inputs for `ngx-spinner`.

| Input | Required | Type | Details |
| --- | --- | --- | --- |
| visible | Optional | boolean | `true` to show spinner, `false` to hide spinner |
| config | Optional | ISpinnerConfig | Spinner configuration object, see [options](#config-options) |

## Config Options
Below are the configuration options for spinner, type `ISpinnerConfig`. Config options can be set globally or can be set for each `ngx-spinner` instance.

| Option | Type | Default | Details |
| --- | --- | --- | --- |
| placement | enum | SPINNER_PLACEMENT.inplace | Controls placement for spinner instance.<br>`SPINNER_PLACEMENT.inplace`: shows spinner on element, not blocking anything<br>`SPINNER_PLACEMENT.block_ui`: shows spinner blocking parent element. Parent element must explicitely specify `position: relative` css.<br>`block_window`: shows spinner on window with mask, blocking entire app. |
| animation | enum | SPINNER_ANIMATIONS.blink | Controls animation for spinner instance. Can be set anything like `SPINNER_ANIMATIONS.xxxxxxx` |
| size | string | `2rem` | Controls size of spinner. Can be specified in any css friendly value, eg. `18px`, `4rem`, `3.2em` etc. |
| bgColor | string | `rgba(255,255,255,0.8)` | Controls background mask color for spinner instance. Can be any css color hex, rgb(a) value etc. eg. `#eaeaea`, `rgba(0,0,0,0.8)` etc. |
| color | string | `#e46521` | Controls color of spinner. Can be any css color hex, rgb(a) value. |
| secondaryColor | string | `#1574b3` | Controls secondary color for spinner. Can be any valid css color. |

### Global Config
Global config affects all spinners in app. These config overrides default configs and are overriden by instance configs. To set global config use `config` method while including `NgxSpinnerModule`.
``` typescript
@NgModule({
  // ...
  imports: [
	// ...
	NgxSpinnerModule.config({
      size: '3.5rem',
      color: '#53f46e'
	})
  ],
  // ...
})
```

### Instance Config
Instance config affects only the spinner instance. These config ovverrides global config. Instance config can be set by input parameter `config`.

## API
Below are the methods exposed by `NgxSpinner`.

| Method | Details
| --- | --- |
| `show()` | Shows spinner instance |
| `hide()` | Hides spinner instance |
| `toggle()` | Alters the display state of spinner instance |

## Optional: Usage (example with componentRef)
Below is alternate way of using spinner with [API](#api). 
component.html
``` html
<ngx-spinner #loginSpinner></ngx-spinner>
```
component.ts
``` typescript
import { NgxSpinner } from '@hardpool/ngx-spinner';

@Component({
  // ...
})
export class DemoComponent implements OnInit {
  @ViewChild("loginSpinner") loginSpinner: NgxSpinner;

  constructor() { }

  ngOnInit() {
	this.loginSpinner.config = {
		// ... spinner config ...
	};
  }
  showSpinner(){
    this.loginSpinner.show();
  }
  hideSpinner(){
    this.loginSpinner.hide();
  }
}
```
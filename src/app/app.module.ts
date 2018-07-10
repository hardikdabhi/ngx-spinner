import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ColorPickerModule } from 'ngx-color-picker';
import { AppComponent } from './app.component';
import { NgxSpinnerModule } from './ngx-spinner/ngx-spinner.module';
import { DemoComponent } from './demo/demo.component';
import { NgxSpinner } from './ngx-spinner/ngx-spinner/ngx-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent
	],
	entryComponents:[
		NgxSpinner
	],
  imports: [
		BrowserModule,
		FormsModule,
		ColorPickerModule,
		NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

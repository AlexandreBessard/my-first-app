import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
//import {FormsModule} from "@angular/forms"; // import ngModel

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
      // import some form feature
        //FormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

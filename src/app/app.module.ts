import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxKeyvalueModule } from 'projects/suarsan/ngx-keyvalue/src/public-api';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxKeyvalueModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

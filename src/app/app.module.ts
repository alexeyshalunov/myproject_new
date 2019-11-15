import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuccessbuttonComponent } from './successbutton/successbutton.component';
import { WarningbuttonComponent } from './warningbutton/warningbutton.component';

@NgModule({
  declarations: [
    AppComponent,
    SuccessbuttonComponent, WarningbuttonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

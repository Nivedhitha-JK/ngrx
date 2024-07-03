import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './share/store/counter.reducer';
import { CounterButtonComponent } from './counter/counter-button/counter-button.component';
import { CounterDisplayComponent } from './counter/counter-display/counter-display.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { materialmodule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    CounterButtonComponent,
    CounterDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    materialmodule,
    StoreModule.forRoot({counter:counterReducer}),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

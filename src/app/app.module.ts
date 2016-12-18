import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { PlacesDescComponent } from './places-desc/places-desc.component';
import { CityDescComponent } from './city-desc/city-desc.component';
import { PhoneNumberPipe } from './phone-number.pipe';
import { CitiesFilterPipe } from './cities-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TemperatureComponent,
    PlacesDescComponent,
    CityDescComponent,
    PhoneNumberPipe,
    CitiesFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

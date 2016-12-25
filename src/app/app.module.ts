import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { PlacesDescComponent } from './places-desc/places-desc.component';
import { CityDescComponent } from './city-desc/city-desc.component';
import { PhoneNumberPipe } from './custom-pipes/phone-number.pipe';
import { CitiesFilterPipe } from './custom-pipes/cities-filter.pipe';
import { cityToken, exchangeToken} from './tokens'
import { ExchangeService } from './custom-services/exchange.service'

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
  providers: [{provide:exchangeToken, useClass:ExchangeService}],
  bootstrap: [AppComponent]
})
export class AppModule { }

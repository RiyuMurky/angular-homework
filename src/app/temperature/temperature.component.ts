import { Component, OnInit, Input, Inject } from '@angular/core';
import { exchangeToken } from '../tokens'
import { ExchangeService } from '../custom-services/exchange.service'
import { Observable } from 'rxjs/Observable'

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.css']
})
export class TemperatureComponent implements OnInit {

  // @Input()
  public temperature:temperatures;

  public constructor(@Inject(exchangeToken) private _exchangeService:ExchangeService) {
    this._exchangeService.currentTemperaturesObservable.subscribe(
      (temperature:temperatures) => {
        this.temperature = temperature;
      }
    )
    // this.temperatureObservable = this._exchangeService.currentCityObservable;
  }

  ngOnInit() {}

}

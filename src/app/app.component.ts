import { Component, Inject } from '@angular/core';
import { exchangeToken } from './tokens'
import { ExchangeService } from './custom-services/exchange.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string = 'Hot Weather Widget';
  public cityCurrent:cities;
  // public cityList:cities[] = [];

  // public get getPlace():places{
  //   let p:places;
  //   if(typeof this.cityCurrent !== 'undefined'){
  //     p = this.cityCurrent.place;
  //     p.image = this.cityCurrent.imageUrlSecond;
  //     p.alt = '';
  //   }
  //   return p;
  // }

  public constructor(@Inject(exchangeToken) private _exchangeService:ExchangeService){
    // this.cityCurrent = this.cityList[0];
    this._exchangeService.currentCityObservable.subscribe((city:cities) => {
        this.cityCurrent = city;
      }
    )
  }
}

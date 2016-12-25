import { Injectable } from '@angular/core';
import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';
import 'rxjs/add/operator/map';

@Injectable()
export class ExchangeService {
  // Subject
  private currentCity:Subject<cities> = new Subject<cities>();
  private currentPlaces:ReplaySubject<places> = new ReplaySubject<places>(1);
  private currentTemperatures:ReplaySubject<temperatures> = new ReplaySubject<temperatures>(1);

  // Observable, hide CurrentCity
  // only subscribe interface
  public currentCityObservable:Observable<cities> = this.currentCity.asObservable();
  public currentPlacesObservable:Observable<places> = this.currentPlaces.asObservable();
  public currentTemperaturesObservable:Observable<temperatures> = this.currentTemperatures.asObservable();

  // public currentPlacesObservable:Observable<places> = this.currentCity.map((city:cities) => {
  //   let p:places;
  //   p = city.place;
  //   p.image = city.imageUrlSecond;
  //   p.alt = '';
  //   return p;
  // })

  //   let p:places;
  //   if(typeof this.cityCurrent !== 'undefined'){
  //     p = this.cityCurrent.place;
  //     p.image = this.cityCurrent.imageUrlSecond;
  //     p.alt = '';
  //   }
  //   return p;

  // Next
  public sendCurrentCity(city: cities):void {
    this.currentCity.next(city);
  }

  public constructor() {
    this.currentCity.subscribe((city:cities) => {
      let p:places;
      p = city.place;
      p.image = city.imageUrlSecond;
      p.alt = '';
      this.currentPlaces.next(p);
      this.currentTemperatures.next(city.temperature);
    })
  }
}

import { Component, OnInit, Input, Output, EventEmitter, Inject, ViewChild, ElementRef } from '@angular/core';
import { CityDescService } from './city-desc.service'
import { cityToken, exchangeToken } from '../tokens'

@Component({
  selector: 'app-city-desc',
  templateUrl: './city-desc.component.html',
  styleUrls: ['./city-desc.component.css'],
  providers: [{provide:cityToken, useClass:CityDescService}]
})
export class CityDescComponent implements OnInit {
  @ViewChild('scrollList') public myScrollContainer: ElementRef;
  private changeCity:boolean = false;
  public populationMin:number = -1;
  public populationMax:number = -1;


  public cityList:cities[];

  @Input()
  public currentCity:cities;

  // @Output()
  // public chooseCity: EventEmitter<cities> = new EventEmitter<cities>()

  public filter(event:Event):boolean{
    let a:HTMLHRElement = event.target as HTMLHRElement;
    let href:string = a.getAttribute("href");
    switch (href) {
      case "ALL":
        this.changeCity = true;
        this.populationMin = -1;
        this.populationMax = -1;
        break;
      case "BIG":
        this.changeCity = true;
        this.populationMin = 1000;
        this.populationMax = -1;
        break;
      case "MIDDLE":
        this.changeCity = true;
        this.populationMin = 500;
        this.populationMax = 999;
        break;
      case "SMALL":
        this.changeCity = true;
        this.populationMin = -1;
        this.populationMax = 499;
        break;
      default:
        break;
    }

    return false;
  }
  public choose(city:cities) {
    this.currentCity = city;
    // this.chooseCity.emit(this.currentCity);
    this._exchangeService.sendCurrentCity(this.currentCity);
  }

  public scrollTo(p:number){
      this.myScrollContainer.nativeElement.scrollTop = p;
  }

  public active(city:cities):boolean {
    if(this.changeCity){
      this.scrollTo(0);
      this.changeCity = false;
      this.choose(city);
    };
    return city === this.currentCity;
  }
  public constructor(@Inject(cityToken) private _cityDescService,
                     @Inject(exchangeToken) private _exchangeService) {

    this.cityList = this._cityDescService.getCities();

    if(this.cityList.length > 0 ){
      this.choose(this.cityList[0]);
    }

  }
  ngOnInit() {}

}

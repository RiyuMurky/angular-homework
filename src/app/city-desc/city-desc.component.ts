import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-city-desc',
  templateUrl: './city-desc.component.html',
  styleUrls: ['./city-desc.component.css']
})
export class CityDescComponent implements OnInit {

  public populationMin:number = -1;
  public populationMax:number = -1;

  @Input()
  public cityList:cities[];

  @Input()
  public currentCity:cities;

  @Output()
  public chooseCity: EventEmitter<cities> = new EventEmitter()

  public constructor() {}

  ngOnInit() {
  }

  public filter(event:Event):boolean{
    let a:HTMLHRElement = event.target as HTMLHRElement;
    let href:string = a.getAttribute("href");
    switch (href) {
      case "ALL":
        this.populationMin = -1;
        this.populationMax = -1;
        break;
      case "BIG":
        this.populationMin = 1000;
        this.populationMax = -1;
        break;
      case "MIDDLE":
        this.populationMin = 500;
        this.populationMax = 999;
        break;
      case "SMALL":
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
    this.chooseCity.emit(this.currentCity);
  }

}

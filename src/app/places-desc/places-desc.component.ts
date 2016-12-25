import { Component, OnInit, Input, Inject } from '@angular/core';
import { ExchangeService } from '../custom-services/exchange.service'
import { exchangeToken } from '../tokens'

@Component({
  selector: 'app-places-desc',
  templateUrl: './places-desc.component.html',
  styleUrls: ['./places-desc.component.css']
})
export class PlacesDescComponent implements OnInit {

  public followers:number = 0;
  public following:number = 0;
  public image:string = 'assets/images/b1.jpg';
  public alt:string = '';

  public constructor(@Inject(exchangeToken) private _exchangeService) {
    this._exchangeService.currentPlacesObservable.subscribe((p:places) => {
      this.followers = p.followers;
      this.following = p.following;
      this.image = p.image;
      this.alt = p.alt;
    });
  }
  ngOnInit() {}

  // @Input()
  // public set place(p:places){
  //   if(typeof p !== 'undefined'){
  //     this.followers = p.followers;
  //     this.following = p.following;
  //     this.image = p.image;
  //     this.alt = p.alt;
  //   };
  // };

}

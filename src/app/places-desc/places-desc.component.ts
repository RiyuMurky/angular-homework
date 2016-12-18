import { Component, OnInit, Input } from '@angular/core';

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

  public constructor() { }

  ngOnInit() {
  }

  @Input()
  public set place(p:places){
    this.followers = p.followers;
    this.following = p.following;
    this.image = p.image;
    this.alt = p.alt;
  };

}

interface cities{
  imageUrlFirst:string;
  imageUrlSecond:string;
  phoneNumber:string;
  headerName:string;
  descText:string;
  infoText:string;
  imageAltFirst:string;
  imageAltSecond:string;
  place:places;
  population: number;
  temperature:temperatures;
}

interface places{
  followers:number;
  following:number;
  image?:string;
  alt?:string;
}

interface temperatures{
  air:number;
  water:number;
}

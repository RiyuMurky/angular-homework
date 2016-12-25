import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'citiesFilter'
})
export class CitiesFilterPipe implements PipeTransform {

  transform(value: cities[], populationMin:number, populationMax:number): any {
    if(populationMin !== -1 && populationMax !== -1){
      return value.filter(city => city.population >= populationMin && city.population <= populationMax );
    }
    if(populationMin !== -1){
      return value.filter(city => city.population >= populationMin );
    }
    if(populationMax !== -1){
      return value.filter(city => city.population <= populationMax );
    }

    return value;
  }

}

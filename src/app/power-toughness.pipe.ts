import { Pipe, PipeTransform } from '@angular/core';
import {Card} from './models/card';

@Pipe({
  name: 'powerToughness'
})
export class PowerToughnessPipe implements PipeTransform {

  transform(card: Card): string {
    return `${card.power} / ${card.toughness}`
  }

}

import {Component, Input} from '@angular/core';
import {Card} from '../models/card';

@Component({
  selector: 'app-card-list-item',
  imports: [],
  templateUrl: './card-list-item.component.html',
  styleUrl: './card-list-item.component.css'
})
export class CardListItemComponent {
  @Input() card?:Card;
}

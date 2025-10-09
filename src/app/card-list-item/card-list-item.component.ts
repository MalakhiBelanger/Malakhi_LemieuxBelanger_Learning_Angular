import {Component, Input} from '@angular/core';
import {Card} from '../models/card';
import {NgIf, NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-card-list-item',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './card-list-item.component.html',
  styleUrl: './card-list-item.component.css',
})
export class CardListItemComponent {
  @Input() card!:Card;
  @Input() even!: boolean;
}

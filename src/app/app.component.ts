import {Component, OnInit} from '@angular/core';
import { Card } from './models/card';
import {CardListComponent} from './card-list/card-list.component';
import {CardListItemComponent} from './card-list-item/card-list-item.component';
import {MagicCardService} from './services/magic-card.service';
@Component({
  selector: 'app-root',
  imports: [CardListComponent, CardListItemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  protected magicCardService: MagicCardService;
  protected topCard!: Card;
  constructor(cardService: MagicCardService) {
    this.magicCardService = cardService;
  }
  ngOnInit() {
    this.magicCardService.getCardById(1).subscribe(a => {
      if(a) {
        this.topCard = a;
      }
    })
  }
}

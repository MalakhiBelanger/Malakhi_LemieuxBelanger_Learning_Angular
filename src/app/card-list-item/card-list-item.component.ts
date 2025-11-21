import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../models/card';
import {CurrencyPipe, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MagicCardService} from '../services/magic-card.service';
import {PowerToughnessPipe} from '../power-toughness.pipe';
import {HoverHighlightDirective} from '../directives/hover-highlight.directive';
import {HighlightOnFocusDirective} from '../directives/highlight-on-focus.directive';
@Component({
  selector: 'app-card-list-item',
  imports: [
    NgOptimizedImage,
    UpperCasePipe,
    TitleCasePipe,
    CurrencyPipe,
    PowerToughnessPipe,
    HoverHighlightDirective
  ],
  templateUrl: './card-list-item.component.html',
  styleUrl: './card-list-item.component.css',
})
export class CardListItemComponent implements OnInit{
  constructor(private route: ActivatedRoute, private cardService: MagicCardService) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.cardService.getCardById(Number(id)).subscribe(card => {
        if(card) {
          this.card = card;
          console.log(this.card)
        }
      })
    }
  }

  @Input() card!:Card;
  @Input() even!: boolean;
}

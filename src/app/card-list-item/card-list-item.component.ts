import {Component, Input, OnInit} from '@angular/core';
import {Card} from '../models/card';
import {NgIf, NgOptimizedImage} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {MagicCardService} from '../services/magic-card.service';
@Component({
  selector: 'app-card-list-item',
  imports: [
    NgIf,
    NgOptimizedImage
  ],
  templateUrl: './card-list-item.component.html',
  styleUrl: './card-list-item.component.css',
})
export class CardListItemComponent implements OnInit{
  constructor(private route: ActivatedRoute, private cardService: MagicCardService) {}
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.cardService.getCardById(Number(id)).subscribe(card => {
        if(card) {
          this.card = card;
        }
      })
    }
  }

  @Input() card!:Card;
  @Input() even!: boolean;
}

import {Component, OnInit} from '@angular/core';
import {Card} from '../models/card';
import {CardListItemComponent} from '../card-list-item/card-list-item.component';
import {NgForOf} from '@angular/common';
import { MagicCardService } from '../services/magic-card.service';

@Component({
  selector: 'app-card-list',
  imports: [
    CardListItemComponent,
    NgForOf,
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  protected magicCardService: MagicCardService;
  protected cardList: Card[] = [];
  constructor(private cardService: MagicCardService) {
    this.magicCardService = cardService
  }
  onButtonClick() {
    alert('Button Clicked');
  }
  ngOnInit() {
    this.magicCardService.getCards().subscribe({
      next: (data:Card[]) => this.cardList = data, error:err => console.error("Error fetching", err), complete:() => console.log("fetch complete!")
    })
  }
}


import {Component, OnInit} from '@angular/core';
import {Card} from '../models/card';
import {CardListItemComponent} from '../card-list-item/card-list-item.component';

import { MagicCardService } from '../services/magic-card.service';
import {ModifyListItemComponent} from '../modify-list-item/modify-list-item.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-card-list',
  imports: [
    CardListItemComponent,
    ModifyListItemComponent,
    RouterLink
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent implements OnInit {
  protected cardList: Card[] = [];
  constructor(private cardService: MagicCardService) {
  }
  ngOnInit() {
    this.cardService.getCards().subscribe({
      next: (data:Card[]) => this.cardList = data, error:err => console.error("Error fetching", err), complete:() => console.log("fetch complete!")
    })
  }
  protected delete(id: number) {
    this.cardService.deleteCard(id).subscribe(() => {
      this.cardService.getCards().subscribe(a => this.cardList = a)
    }, error => console.error("Error deleting card", error))
  }
}


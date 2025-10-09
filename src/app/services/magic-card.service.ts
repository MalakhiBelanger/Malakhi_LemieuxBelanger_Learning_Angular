import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Card} from '../models/card';
import {cardList} from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class MagicCardService {
  private cards: Card[];
  constructor() {
    this.cards = cardList;
  }
  getCards(): Observable<Card[]> {
    return of(this.cards);
  }
  // Add a new card
  addCard(newCard:Card) : Observable<Card[]> {
    this.cards.push(newCard)
    return of(this.cards);
  }
  // Update an Existing card
  updateCard(updatedCard: Card): Observable<Card[]> {
    const i = this.cards.findIndex(card => card.id === updatedCard.id)
    if(i !== -1) {
      this.cards[i] = updatedCard
    }
    return of(this.cards);
  }
  // Delete: Remove a card by ID
  deleteCard(cardId: number): Observable<Card[]> {
    this.cards = this.cards.filter(card => card.id !== cardId);
    return of(this.cards);
  }
  // Get card by ID
  getCardById(cardId: number): Observable<Card | undefined> {
    const card = this.cards.find(card => card.id === cardId)
    return of(card)
  }
}

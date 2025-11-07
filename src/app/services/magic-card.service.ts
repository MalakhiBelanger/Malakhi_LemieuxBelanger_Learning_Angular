import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Card} from '../models/card';
import {cardList} from '../data/mock-content';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MagicCardService {
  private apiUrl = 'api/cards';
  private cards: Card[]= cardList;
  constructor(private http: HttpClient) {}
  getCards(): Observable<Card[]> {
    return this.http.get<Card[]>(this.apiUrl);
  }
  // Add a new card
  addCard(card:Card) : Observable<Card> {
    return this.http.post<Card>(this.apiUrl, card)
  }
  // Update an Existing card
  updateCard(card: Card): Observable<Card | undefined> {
    const url = `${this.apiUrl}/${card.id}`;
    return this.http.put<Card>(url, card);
  }
  // Delete: Remove a card by ID
  deleteCard(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url)
  }
  // Get card by ID
  getCardById(id: number): Observable<Card> {
    return this.http.get<Card>(`${this.apiUrl}/${id}`);
  }

  generateNewId(): number {
    return this.cards.length > 0 ? Math.max(...this.cards.map(card => card.id)) + 1: 1;
  }
}

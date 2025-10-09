import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Card} from '../models/card';
import {cardList} from '../data/mock-content';

@Injectable({
  providedIn: 'root'
})
export class MagicCardService {
  constructor() { }
  getCards(): Observable<Card[]> {
    return of(cardList);
  }
}

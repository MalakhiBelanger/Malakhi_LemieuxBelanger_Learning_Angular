import {Component} from '@angular/core';
import {Card} from '../models/card';
import {CardListItemComponent} from '../card-list-item/card-list-item.component';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-card-list',
  imports: [
    CardListItemComponent,
    NgForOf
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {

}


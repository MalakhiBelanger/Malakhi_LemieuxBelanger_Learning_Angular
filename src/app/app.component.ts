import { Component } from '@angular/core';
import { Card } from './models/card';
import {NgForOf, NgIf} from '@angular/common';
import {CardListComponent} from './card-list/card-list.component';

@Component({
  selector: 'app-root',
  imports: [NgIf, NgForOf, CardListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Malakhi_LemieuxBelanger_Learning_Angular';
  name: string = 'Malakhi';
  age: number = 23;
  cardList: Card[] = [];
}

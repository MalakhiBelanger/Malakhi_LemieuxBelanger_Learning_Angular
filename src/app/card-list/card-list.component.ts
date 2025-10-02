import {Component, Input} from '@angular/core';
import {Card} from '../models/card';
import {CardListItemComponent} from '../card-list-item/card-list-item.component';

@Component({
  selector: 'app-card-list',
  imports: [
    CardListItemComponent
  ],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.css'
})
export class CardListComponent {
  cardList: Card[] = [{id: 1, color: "devoid", name: "Black Lotus", oracle: "Tap, Sacrifice this artifact: Add three mana of any one color.", type: "Artifact", cost: "0"}, {id: 2, color: "blue", name: "Omniscience", type: "Enchantment", oracle: "You may cast spells from your hand without paying their mana costs.", cost: "{U}{U}{U}{7}"}, {id: 3, color: "white", type: "Enchantment", oracle: "Hexproof\nIf a source would deal damage to you, prevent that damage and put an incarnation counter on this enchantment.\nWhen there are nine or more incarnation counters on this enchantment, exile it.\nWhen this enchantment leaves the battlefield, you lose the game.", name: "Nine Lives", cost: "{W}{W}{1}"}, {id: 4, oracle: "Skip your draw step.\nWhenever you discard a card, exile that card from your graveyard.\nPay 1 life: Exile the top card of your library face down. Put that card into your hand at the beginning of your next end step.", name: "Necropotence", type: "Enchantment", color: "black", cost: "{B}{B}{B}"}, {id: 5, cost: "{G}", color: "green", type: "Instant", oracle: "As an additional cost to cast this spell, sacrifice a land.\nSearch your library for a land card, put that card onto the battlefield, then shuffle.", name: "Crop Rotation"}, {id: 6, name: "Underworld Breach", oracle: "Each nonland card in your graveyard has escape. The escape cost is equal to the card’s mana cost plus exile three other cards from your graveyard. (You may cast cards from your graveyard for their escape cost.)\nAt the beginning of the end step, sacrifice this enchantment.", type: "Enchantment", color: "red", cost: "{1}{R}"}];
}


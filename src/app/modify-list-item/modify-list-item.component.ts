import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MagicCardService} from '../services/magic-card.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Card} from '../models/card';
import {HighlightOnFocusDirective} from '../directives/highlight-on-focus.directive';


@Component({
  selector: 'app-modify-list-item',
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  cardForm: FormGroup;
  card: Card | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private cardService: MagicCardService,
    private router: Router
  ) {
    this.cardForm = this.fb.group({
      id: ['', Validators.required],
      color: ['', Validators.required],
      name: ['', Validators.required],
      type: ['', Validators.required],
      cost: ['', Validators.required],
      oracle: [''],
      power: [''],
      toughness: [''],
      source: [''],
      printing: ['', Validators.required],
    })
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id) {
      this.cardService.getCardById(+id).subscribe(card => {
        if(card) {
          this.card = card;
          this.cardForm.patchValue(card)
        }
      })
    }
  }
  onSubmit(): void {
    const card: Card = this.cardForm.value;
    console.log(card)
    if(card.id) {
      this.cardService.updateCard(card).subscribe(() => this.router.navigate([`/cards/${card.id}`]), error => console.error("Error creating card", error))
    } else {
      card.id = this.cardService.generateNewId();
      this.cardService.addCard(card).subscribe(() => this.router.navigate([`/cards/${card.id}`]), error => console.error("Error creating card", error))
    }
  }
}

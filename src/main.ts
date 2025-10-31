import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {CardListComponent} from './app/card-list/card-list.component';
import {CardListItemComponent} from './app/card-list-item/card-list-item.component';
import {ModifyListItemComponent} from './app/modify-list-item/modify-list-item.component';

const routes: Routes = [
  {path:'', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', component: CardListComponent},
  {path: 'cards/:id', component: CardListItemComponent},
  {path: 'edit', component: ModifyListItemComponent},
  {path: 'edit/:id', component: ModifyListItemComponent},
  {path: '**', redirectTo: '/'}
]

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]})
  .catch((err) => console.error(err));

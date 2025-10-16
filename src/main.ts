import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {CardListComponent} from './app/card-list/card-list.component';
import {CardListItemComponent} from './app/card-list-item/card-list-item.component';
import {PageNotFoundComponent} from './app/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', component: CardListComponent},
  {path: 'cards/:id', component: CardListItemComponent},
  {path: '**', component:PageNotFoundComponent}
]

bootstrapApplication(AppComponent, {providers: [provideRouter(routes)]})
  .catch((err) => console.error(err));

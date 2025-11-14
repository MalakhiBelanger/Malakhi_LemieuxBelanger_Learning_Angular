import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {CardListComponent} from './app/card-list/card-list.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app/services/in-memory-data.service';

const routes: Routes = [
  {path:'', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', component: CardListComponent},
  {path: 'cards/:id', loadComponent: () => import('./app/card-list-item/card-list-item.component').then(m => m.CardListItemComponent)},
  {path: 'edit/:id', loadComponent: () => import('./app/modify-list-item/modify-list-item.component').then(m => m.ModifyListItemComponent)},
  {path: '**', loadComponent: () => import('./app/page-not-found/page-not-found.component').then(m => m.PageNotFoundComponent)}
]

bootstrapApplication(AppComponent, {providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1 }))
  ]
}).catch((err) => console.error(err));

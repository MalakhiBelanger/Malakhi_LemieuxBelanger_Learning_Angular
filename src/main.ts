import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from '@angular/router';
import {CardListComponent} from './app/card-list/card-list.component';
import {CardListItemComponent} from './app/card-list-item/card-list-item.component';
import {ModifyListItemComponent} from './app/modify-list-item/modify-list-item.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryDataService} from './app/services/in-memory-data.service';

const routes: Routes = [
  {path:'', redirectTo: 'cards', pathMatch: 'full'},
  {path: 'cards', component: CardListComponent},
  {path: 'cards/:id', component: CardListItemComponent},
  {path: 'edit/:id', component: ModifyListItemComponent},
  {path: '**', redirectTo: '/'}
]

bootstrapApplication(AppComponent, {providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1 }))
  ]
}).catch((err) => console.error(err));

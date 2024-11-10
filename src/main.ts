import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {AnimalListComponent} from "./app/animal-list/animal-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";


const routes: Routes = [{path:'', redirectTo: '/animals', pathMatch: 'full'}, //default route
  { path: 'animals', component: AnimalListComponent },
  { path: 'modify-animal/:id', component: ModifyListItemComponent },
  { path: 'modify-animal', component: ModifyListItemComponent },
  {path: '**', component:PageNotFoundComponent}];

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes),
  provideHttpClient(withInterceptorsFromDi()), // Ensure that HTTP interceptors are properly configured
  provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 100 }))] //
}).catch((err) => console.error(err));





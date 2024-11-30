import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {AnimalListComponent} from "./app/animal-list/animal-list.component";
import {importProvidersFrom} from "@angular/core";
import {HttpClientInMemoryWebApiModule} from "angular-in-memory-web-api";
import {InMemoryDataService} from "./app/services/in-memory-data.service";
import {provideHttpClient, withInterceptorsFromDi} from "@angular/common/http";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import {MatTableModule} from "@angular/material/table";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";


const routes: Routes = [{path:'', redirectTo: '/animals', pathMatch: 'full'}, //default route and eagerly routed
  { path: 'animals', component: AnimalListComponent }, //eagerly routed
  { path: 'modify-animal/:id', loadComponent: () => import("./app/modify-list-item/modify-list-item.component").then(m => m.ModifyListItemComponent)},
  { path: 'modify-animal', loadComponent: () => import("./app/modify-list-item/modify-list-item.component").then(m => m.ModifyListItemComponent) },
  {path: '**', loadComponent: () => import("./app/page-not-found/page-not-found.component").then(m => m.PageNotFoundComponent)}];

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes),
  provideHttpClient(withInterceptorsFromDi()), // Ensure that HTTP interceptors are properly configured
  provideRouter(routes),
  importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { delay: 1000 })),
    provideAnimationsAsync(), // Import providers dynamically
    MatTableModule,
    MatButtonModule,
    MatIconModule,
  ] //
}).catch((err) => console.error(err));





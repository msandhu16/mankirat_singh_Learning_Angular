import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";
import {AnimalListComponent} from "./app/animal-list/animal-list.component";
import {PageNotFoundComponent} from "./app/page-not-found/page-not-found.component";
import {ModifyListItemComponent} from "./app/modify-list-item/modify-list-item.component";


const routes: Routes = [{path:'', redirectTo: '/students', pathMatch: 'full'}, //default route
  { path: 'animals', component: AnimalListComponent },
  {path:'modify-animal', component: ModifyListItemComponent},
  {path: '**', component:PageNotFoundComponent}];

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));





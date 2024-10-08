import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {provideRouter, Routes} from "@angular/router";


const routes: Routes = [];

bootstrapApplication(AppComponent,{
  providers: [provideRouter(routes)]
}).then(r => console.log('Bootstrap successful'));





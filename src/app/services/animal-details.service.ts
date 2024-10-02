import { Injectable } from '@angular/core';
import {AnimalInfo} from "../models/animal-info";
import {animalInfo} from "../../data/mock_content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalDetailsService {

  private animals: AnimalInfo[] = animalInfo;

  constructor() { }

  getAnimals():Observable<AnimalInfo[]>{
    return of(animalInfo);
  }
}

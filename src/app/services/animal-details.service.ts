import { Injectable } from '@angular/core';
import {AnimalInfo} from "../models/animal-info";
import {animalInfo} from "../../data/mock_content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalDetailsService {

  private animals: AnimalInfo[] = animalInfo;

  constructor() {
  }

  getAnimals(): Observable<AnimalInfo[]> {
    return of(animalInfo);
  }

  addAnimal(newAnimal: AnimalInfo): Observable<AnimalInfo[]> {
    this.animals.push(newAnimal)
    return of(this.animals);

  }

  getAnimalById(animalAge: number): Observable<AnimalInfo | undefined> {
    const animal = this.animals.find(animal => animal.animal.id === animalAge);
    return of(animal);


  }

  updateAnimal(updatedAnimal: AnimalInfo): Observable<AnimalInfo[]> {
    const index = this.animals.findIndex(animal => animal.animal.id === updatedAnimal.animal.id);
    if (index !== -1) {
      this.animals[index] = updatedAnimal;
    }
    return of(this.animals);


  }

  deleteAnimal(animalId: number): Observable<AnimalInfo[]> {
    this.animals = this.animals.filter(animal => animal.animal.id !== animal.animal.id);
    return of(this.animals);
  }


}

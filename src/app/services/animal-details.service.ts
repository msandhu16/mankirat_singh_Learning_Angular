import { Injectable } from '@angular/core';
import {AnimalInfo} from "../models/animal-info";
import {animalInfo} from "../../data/mock_content";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AnimalDetailsService {

  animals: AnimalInfo[] = animalInfo;

  //Creating CRUD Operations

  constructor() {
  }

  getAnimals(): Observable<AnimalInfo[]> {
    return of(this.animals);
  }

  addAnimal(newAnimal: AnimalInfo): Observable<AnimalInfo[]> {
    this.animals.push(newAnimal)
    return of(this.animals);

  }

  getAnimalById(animalId: number): Observable<AnimalInfo | undefined> {
    const animal = this.animals.find(animal => animal.id === animalId);
    return of(animal);


  }

  updateAnimal(updatedAnimal: AnimalInfo): Observable<AnimalInfo[]> {
    const index = this.animals.findIndex(animal => animal.id === updatedAnimal.id);
    if (index !== -1) {
      this.animals[index] = updatedAnimal;
    }
    return of(this.animals);


  }

  deleteAnimal(id: number): Observable<AnimalInfo[]> {
    this.animals = this.animals.filter(animal => animal.id !== id);
    return of(this.animals);

  }



    generateNewId(): number {
      return this.animals.length > 0 ? Math.max(...this.animals.map(animal => animal.id)) + 1 : 1;
    }

}

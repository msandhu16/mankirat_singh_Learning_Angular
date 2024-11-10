import { Injectable } from '@angular/core';
import {AnimalInfo} from "../models/animal-info";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {

  createDb():{animals: AnimalInfo[]} {

    const animals: AnimalInfo[] = [
      {    id: 1,
        name: 'Max',
        type: 'Dog',
        color: 'Brown',
        age: 5, gender: 'Male', weight: 10.00,img:"assets/img.png" },
      {id: 2,
        name: 'Whiskers',
        type: 'Cat',
        color: 'White',
        age: 3,
        gender: 'Female', weight: 8.37,img:"assets/img_1.png"


      },
      {
        id: 3,
        name: 'Charlie',
        type: 'Parrot',
        color: 'Green',
        age: 2,
        gender: 'Male', weight: 3.001,img:"assets/img_2.png"


      },
      {
        id: 4,
        name: 'Bella',
        type: 'Horse',
        color: 'Black',
        age: 7,
        gender: 'Female', weight: 80.09,img:"assets/img_3.png"

      },
      {
        id: 5,
        name: "Elizabeth",
        type: "Orangutan",
        color: "Orange",
        age: 23,
        gender: 'Female', weight: 120.123,img:"assets/img_4.png" }
    ]

    return {animals};
  }

  constructor() { }
}

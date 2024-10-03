import {Animals} from "../app/models/animals";
import {AnimalInfo} from "../app/models/animal-info";

let animalList: Animals[] = [
  {
    id: 1,
    name: 'Max',
    type: 'Dog',
    color: 'Brown',
    age: 5
  },
  {
    id: 2,
    name: 'Whiskers',
    type: 'Cat',
    color: 'White',
    age: 3
  },
  {
    id: 3,
    name: 'Charlie',
    type: 'Parrot',
    color: 'Green',
    age: 2
  },
  {
    id: 4,
    name: 'Bella',
    type: 'Horse',
    color: 'Black',
    age: 7
  }
];

export let animalInfo: AnimalInfo[] = [
  { animal: animalList[0], gender: 'Male', weight: 10 },
  { animal: animalList[1], gender: 'Female', weight: 8 },
  { animal: animalList[2], gender: 'Male', weight: 3 },
  { animal: animalList[3], gender: 'Female', weight: 80 }
];

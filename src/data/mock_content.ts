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
  },
  {
    id: 5,
    name: "Elizabeth",
    type: "Orangutan",
    color: "Orange",
    age: 23
  }
];

export let animalInfo: AnimalInfo[] = [
  { animal: animalList[0], gender: 'Male', weight: 10,img:"assets/img.png" },
  { animal: animalList[1], gender: 'Female', weight: 8,img:"assets/img_1.png"},
  { animal: animalList[2], gender: 'Male', weight: 3,img:"assets/img_2.png" },
  { animal: animalList[3], gender: 'Female', weight: 80,img:"assets/img_3.png" },
  { animal: animalList[4], gender: 'Female', weight: 120,img:"assets/img_4.png" }
];

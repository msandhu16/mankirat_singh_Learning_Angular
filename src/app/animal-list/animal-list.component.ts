import {Component, Input} from '@angular/core';
import {Animals} from "../models/animals";
import {AnimalInfo} from "../models/animal-info";
import {AnimalListItemComponent} from "../animal-list-item/animal-list-item.component";

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [
    AnimalListItemComponent
  ],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {
  animalList: Animals[] = [
    {
      name: 'Max',
      type: 'Dog',
      color: 'Brown',
      age: 5
    },
    {
      name: 'Whiskers',
      type: 'Cat',
      color: 'White',
      age: 3
    },
    {
      name: 'Charlie',
      type: 'Parrot',
      color: 'Green',
      age: 2
    },
    {
      name: 'Bella',
      type: 'Horse',
      color: 'Black',
      age: 7
    }
  ];

  animalInfo: AnimalInfo[] = [
    { animal: this.animalList[0], gender: 'Male', weight: 10 },
    { animal: this.animalList[1], gender: 'Female', weight: 8 },
    { animal: this.animalList[2], gender: 'Male', weight: 3 },
    { animal: this.animalList[3], gender: 'Female', weight: 80 }
  ];
}

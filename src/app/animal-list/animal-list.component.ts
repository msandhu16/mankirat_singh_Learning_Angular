import {Component, Input} from '@angular/core';
import {Animals} from "../models/animals";
import {AnimalInfo} from "../models/animal-info";
import {AnimalListItemComponent} from "../animal-list-item/animal-list-item.component";
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [
    AnimalListItemComponent,
    NgForOf,
    NgClass
  ],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent {

}

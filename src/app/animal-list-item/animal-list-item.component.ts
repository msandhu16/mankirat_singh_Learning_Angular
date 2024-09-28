import {Component, Input} from '@angular/core';
import {AnimalInfo} from "../models/animal-info";

@Component({
  selector: 'app-animal-list-item',
  standalone: true,
  imports: [],
  templateUrl: './animal-list-item.component.html',
  styleUrl: './animal-list-item.component.css'
})
export class AnimalListItemComponent {
   @Input() pet? : AnimalInfo;

}

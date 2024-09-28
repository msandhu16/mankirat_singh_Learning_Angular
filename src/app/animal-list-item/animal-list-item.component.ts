import {Component, Input} from '@angular/core';
import {AnimalInfo} from "../models/animal-info";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-animal-list-item',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './animal-list-item.component.html',
  styleUrl: './animal-list-item.component.css'
})
export class AnimalListItemComponent {
   @Input() pet? : AnimalInfo;

}

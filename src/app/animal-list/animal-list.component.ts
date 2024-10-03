import {Component, Input} from '@angular/core';
import {Animals} from "../models/animals";
import {AnimalInfo} from "../models/animal-info";
import {AnimalListItemComponent} from "../animal-list-item/animal-list-item.component";
import {NgClass, NgForOf} from "@angular/common";
import {AnimalDetailsService} from "../services/animal-details.service";

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
  animalInfo: AnimalInfo[] = [];

  constructor(private animalDetail: AnimalDetailsService ) {
  }

  ngOnInit(){
    this.animalDetail.getAnimals().subscribe({
      next: (data:AnimalInfo[]) => this.animalInfo = data,
      error:err => console.error("Error fetching Animals", err),
      complete:() => console.log("Student data fetch complete!")
    })
  }
}

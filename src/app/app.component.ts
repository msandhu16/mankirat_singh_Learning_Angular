import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {Person} from "./models/person";
import {NgForOf, NgIf} from "@angular/common";
import {Animals} from "./models/animals";
import {AnimalListComponent} from "./animal-list/animal-list.component";
import {AnimalListItemComponent} from "./animal-list-item/animal-list-item.component";
import {AnimalInfo} from "./models/animal-info";
import {AnimalDetailsService} from "./services/animal-details.service";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, AnimalListComponent, AnimalListItemComponent, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'mankirat-singh-Learning-Angular';
  age: number = 18;
  goodProgrammer: boolean = true;
  index: number = 2;

  name: string = 'Mankirat';
  favouritePet: AnimalInfo | undefined;

  constructor(private animalDetail: AnimalDetailsService) {
  }


  ngOnInit() {

    this.animalDetail.getAnimalById(2).subscribe(animal => this.favouritePet = animal)


  }
}

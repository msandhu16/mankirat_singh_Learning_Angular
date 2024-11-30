import {Component, Input, OnInit} from '@angular/core';
import {Animals} from "../models/animals";
import {AnimalInfo} from "../models/animal-info";
import {AnimalListItemComponent} from "../animal-list-item/animal-list-item.component";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {AnimalDetailsService} from "../services/animal-details.service";
import {MatCardModule} from "@angular/material/card";
import {MatTooltipModule} from "@angular/material/tooltip";
import {MatDialogContent} from "@angular/material/dialog";
import {MatDividerModule} from "@angular/material/divider";

@Component({
  selector: 'app-animal-list',
  standalone: true,
  imports: [
    AnimalListItemComponent,
    NgForOf,
    NgClass,
    NgIf,
    MatCardModule,
    MatTooltipModule,
    MatDialogContent,
    MatDividerModule
  ],
  templateUrl: './animal-list.component.html',
  styleUrl: './animal-list.component.css'
})
export class AnimalListComponent implements OnInit{
  animalInfo: AnimalInfo[] = [];
  error: string | null = null;


  constructor(private animalDetail: AnimalDetailsService ) {
  }

  ngOnInit(){
    this.animalDetail.getAnimals().subscribe({
      next: (data:AnimalInfo[]) => this.animalInfo = data,
      error:err => console.error("Error fetching Animals", err),
      complete:() => console.log("Animal data fetch complete!")
    })
  }


}

import {Component, Input, OnInit} from '@angular/core';
import {AnimalInfo} from "../models/animal-info";
import {DecimalPipe, NgIf, NgOptimizedImage, TitleCasePipe, UpperCasePipe} from "@angular/common";
import {AnimalDetailsService} from "../services/animal-details.service";
import {ActivatedRoute, Router, RouterLink} from "@angular/router";
import {AnimalListComponent} from "../animal-list/animal-list.component";
import {AnimalGenderPipe} from "../pipes/animal-gender.pipe";


@Component({
  selector: 'app-animal-list-item',
  standalone: true,
  imports: [
    NgIf,
    NgOptimizedImage,
    RouterLink,
    TitleCasePipe,
    DecimalPipe,
    UpperCasePipe,
    AnimalGenderPipe
  ],
  templateUrl: './animal-list-item.component.html',
  styleUrl: './animal-list-item.component.css'
})
export class AnimalListItemComponent implements OnInit{
   @Input() pet? : AnimalInfo;
  error: string | null = null;


  constructor(private route: ActivatedRoute,
              private animalService: AnimalDetailsService,
              private router:Router,
              private animalList:AnimalListComponent) {
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.animalService.getAnimalById(Number(id)).subscribe(pet =>{
        this.pet = pet;
      })
    }
  }


  onDelete() {
    if (this.pet) {

      this.animalService.deleteAnimal(this.pet.id).subscribe(

        () => this.router.navigate(['/animals'])

      );
      this.animalService.getAnimals().subscribe(
        (updatedAnimals) => this.animalList.animalInfo = updatedAnimals
      );
    }
  }



}

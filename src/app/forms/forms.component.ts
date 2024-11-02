import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AnimalDetailsService} from "../services/animal-details.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnimalInfo} from "../models/animal-info";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
  animalForm: FormGroup ;
  private animal: AnimalInfo | undefined;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private animalService: AnimalDetailsService,
    private router: Router
  ){
    this.animalForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      age: ['', Validators.required],
      color: ['']
    });





  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animalService.getAnimalById(+id).subscribe(animal => {
        if(animal) {
          this.animal = animal;

          this.animalForm.patchValue(animal);
        }
      });
    }
  }


  onSubmit() {

    const animal: AnimalInfo = this.animalForm.value;

    if (animal.animal.id) {
      this.animalService.updateAnimal(animal);
    } else {
      const newId = this.animalService.generateNewId();
      animal.animal.id = newId;
      this.animalService.addAnimal(animal);
    }

    this.router.navigate(['/animals']);
  }
}

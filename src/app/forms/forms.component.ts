import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AnimalDetailsService} from "../services/animal-details.service";
import {ActivatedRoute, Router} from "@angular/router";
import {AnimalInfo} from "../models/animal-info";
import {HoverHighlightDirective} from "../directives/hover-highlight.directive";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HoverHighlightDirective,
    HighlightOnFocusDirective
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent implements OnInit{
  animalForm: FormGroup ;
  private animal: AnimalInfo | undefined;
  isUpdate:boolean = false;


  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private animalService: AnimalDetailsService,
    private router: Router
  ){
    this.animalForm = this.fb.group({
      id: [animalService.generateNewId(),Validators.required ],
      name: ['', Validators.required],
      age: ['', Validators.required],
      color: [''],
      weight: ['',Validators.required],
      type: ['',Validators.required],
      gender:['',Validators.required]

    });





  }

  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));


    if (id) {
      this.isUpdate = true;
      this.animalService.getAnimalById(id).subscribe({
        next: animal => {
          if (animal) {
            this.animalForm.patchValue(animal);
          }
        },
        error: err => {
          console.error('Error fetching student:', err);
        }
      });

    }
  }


  onSubmit() {
    const animal: AnimalInfo = this.animalForm.value;
    console.log(animal);


    if (this.animalForm.valid && this.isUpdate) {
      console.log(animal);
      this.animalService.updateAnimal(animal).subscribe(() => this.router.navigate(['/animals']));}

      else if (this.animalForm.valid) {
      animal.id = this.animalService.generateNewId();
      this.animalService.addAnimal(animal).subscribe(() => this.router.navigate(['/animals']));

      } else {
        this.animalService.addAnimal(animal).subscribe(() => this.router.navigate(['/animals']));
      }
    }
  }


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

      //if the ID is valid, the StudentService is used to fetch the student's details by calling the getStudentById method
      this.animalService.getAnimalById(id).subscribe({
        next: animal => {
          if (animal) {
            //If the student object is valid, the patchValue method of the reactive form
            // (studentForm) is called to populate the form with the student's data The patchValue method updates the form controls with the
            // values from the student object without resetting the entire form
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

    // const animal: AnimalInfo = this.animalForm.value;
    //
    // if (animal.id) {
    //   console.log("Add");
    //   this.animalService.updateAnimal(animal);
    // } else {
    //   console.log("Update");
    //
    //   const newId = this.animalService.generateNewId();
    //   animal.id = newId;
    //   this.animalService.addAnimal(animal);
    // }
    //
    // this.router.navigate(['/animals']);
    const animal: AnimalInfo = this.animalForm.value;
    console.log(animal);


    if (this.animalForm.valid && this.isUpdate) {
      //Iff the form is valid, it extracts the form values into a student object of type User

      console.log(animal);
      this.animalService.updateAnimal(animal).subscribe(() => this.router.navigate(['/animals']));}

      /*
      Here we have a little bit of logic, first iff the student.id
      and just being updated

      if it does not exist, we know that the student is new and we need to add it to the list
       */
      else if (this.animalForm.valid) {
      animal.id = this.animalService.generateNewId();
      this.animalService.addAnimal(animal).subscribe(() => this.router.navigate(['/animals']));

      } else {
        this.animalService.addAnimal(animal).subscribe(() => this.router.navigate(['/animals']));
      }
    }
  }


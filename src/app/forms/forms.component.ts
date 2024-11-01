import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AnimalDetailsService} from "../services/animal-details.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  animalForm: FormGroup ;

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


  onSubmit() {

  }
}

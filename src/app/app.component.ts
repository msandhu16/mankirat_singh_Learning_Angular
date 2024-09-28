import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Person} from "./models/person";
import {NgForOf, NgIf} from "@angular/common";
import {Animals} from "./models/animals";
import {AnimalListComponent} from "./animal-list/animal-list.component";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf, AnimalListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'mankirat-singh-Learning-Angular';
  age:number = 18;
  goodProgrammer:boolean = true;

  name:string = 'Mankirat';

  person1 : Person={
    firstName : "Mankirat",
    lastName : "Singh",
    age : 18,
    isProgrammer : true,
    profession : "student"

}

  person2 : Person={
    firstName : "Tom",
    lastName : "Smith",
    age : 30,
    profession : "Software Engineer"

  }

  person3 : Person={
    firstName : "John",
    lastName : "Doe",
    age : 45,
    isProgrammer : true,
    profession : "Professor"

  }

  person4 : Person={
    firstName : "Joanna",
    lastName : "Jones",
    age : 26,
    profession : "Architect",
    isProgrammer: false

  }

  animalList: Animals[] = [
    {
      name: 'Max',
      type: 'Dog',
      color: 'Brown',
      age: 5
    },
    {
      name: 'Whiskers',
      type: 'Cat',
      color: 'White',
      age: 3
    },
    {
      name: 'Charlie',
      type: 'Parrot',
      color: 'Green',
      age: 2
    },
    {
      name: 'Bella',
      type: 'Horse',
      color: 'Black',
      age: 7
    }
  ];



}

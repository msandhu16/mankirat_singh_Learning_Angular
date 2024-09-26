import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Person} from "./models/person";
import {NgForOf, NgIf} from "@angular/common";
import {Animals} from "./models/animals";



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgForOf, NgIf],
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

  person5 : Person={
    firstName : "Tom",
    lastName : "Henderson",
    age : 23,
    profession : "Web Developer",
    isProgrammer: true

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


  person: Person[] = [this.person1 , this.person2 , this.person3 ,this.person4, this.person5 ]
}

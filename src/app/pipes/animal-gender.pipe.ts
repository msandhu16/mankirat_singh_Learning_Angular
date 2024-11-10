import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'animalGender',
  standalone: true
})
export class AnimalGenderPipe implements PipeTransform {

  transform(gender:string): string {
    if (gender == "Male"){
      return `M`
    }
    else{
      return `F`
    }

  }

}

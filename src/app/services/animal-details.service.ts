import { Injectable } from '@angular/core';
import {AnimalInfo} from "../models/animal-info";
import {animalInfo} from "../../data/mock_content";
import {catchError, Observable, of,throwError} from "rxjs";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AnimalDetailsService {

  private apiUrl = 'api/animals';

  public  animals: AnimalInfo[] = animalInfo;

  //Creating CRUD Operations

  constructor(private http: HttpClient) {
  }

  getAnimals(): Observable<AnimalInfo[]> {
    return this.http.get<AnimalInfo[]>(this.apiUrl).pipe(catchError(this.handleError));

  }

  addAnimal(newAnimal: AnimalInfo): Observable<AnimalInfo> {
    return this.http.post<AnimalInfo>(this.apiUrl, newAnimal).pipe(catchError(this.handleError));


  }

  getAnimalById(animalId: number): Observable<AnimalInfo | undefined> {
    return this.http.get<AnimalInfo>(`${this.apiUrl}/${animalId}`).pipe(catchError(this.handleError)); //return a single animal



  }

  updateAnimal(updatedAnimal: AnimalInfo): Observable<AnimalInfo | undefined> {
    const url = `${this.apiUrl}/${updatedAnimal.id}`;
    return this.http.put<AnimalInfo>(url, updatedAnimal).pipe(catchError(this.handleError));


  }

  deleteAnimal(id: number): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url).pipe(catchError(this.handleError));

  }



    generateNewId(): number {
      return this.animals.length > 0 ? Math.max(...this.animals.map(animal => animal.id)) + 1 : 1;
    }

  private handleError(error: HttpErrorResponse) {
    console.error('API error:', error);
    return throwError(() => new Error('Server error, please try again.'));
  }

}

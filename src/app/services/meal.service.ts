import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../models/meal.model';
import { MealSearch } from '../models/meal-search.model';

@Injectable({
  providedIn: 'root'
})
export class MealService {

  private apiUrl = 'https://localhost:7218/api/Meal/'
  private apiUrlConsole = 'http://localhost:5000/api/Meal/'

  constructor(private http: HttpClient) { }

  getRandomMeal() : Observable<Meal> {
    let endPoint : string = this.apiUrl + "random"
    return this.http.get<Meal>(endPoint)
  }

  searchMealByName(mealName: string) : Observable<Meal> {
    let endPoint : string = this.apiUrl + "search?s=" + mealName
    console.log(endPoint)
    return this.http.post<Meal>(endPoint, null)
  }

  getMealSearches() : Observable<MealSearch[]> {
    let endPoint : string = this.apiUrl
    console.log(endPoint)
    return this.http.get<MealSearch[]>(endPoint)
  }
}

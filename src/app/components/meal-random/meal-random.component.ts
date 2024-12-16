import { Component, OnInit } from '@angular/core';
import { Meal, MealInfo } from '../../models/meal.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-random',
  imports: [],
  templateUrl: './meal-random.component.html',
  styleUrl: './meal-random.component.css'
})
export class MealRandomComponent implements OnInit {

  myMeals: Meal
  mealScelto: MealInfo

  constructor(private mealService: MealService) {
    this.myMeals = new Meal
    this.mealScelto = new MealInfo
  }

  ngOnInit(): void {
    this.onClickMealRetriever()
  }

  onClickMealRetriever() {
    this.mealService.getRandomMeal().subscribe((data) => {
      this.mealScelto = this.myMeals.meals[0]
      this.mealScelto = data.meals[0]
    })
  }
}

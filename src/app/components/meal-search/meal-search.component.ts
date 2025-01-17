import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../models/meal.model';

@Component({
  selector: 'app-meal-search',
  imports: [CommonModule],
  templateUrl: './meal-search.component.html',
  styleUrl: './meal-search.component.css'
})
export class MealSearchComponent {

  mealName: string = ''
  myMeals: Meal
  searchPerformed: boolean = false

  constructor(private mealService: MealService, private route: ActivatedRoute) {
    this.myMeals = new Meal
    this.route.queryParams.subscribe(params => {
      if (params['name']) {
        this.onClickMealRetriever(params['name']);
      }
    });
  }

  onClickMealRetriever(mealName: string) {
    this.mealName = mealName
    this.searchPerformed = false

    this.mealService.searchMealByName(this.mealName).subscribe({
      next: (data) => {
        this.myMeals.meals = data.meals || []
        this.searchPerformed = true
      },
      error: (err) => {
        console.error(err)
        this.myMeals.meals = []
        this.searchPerformed = true
      }
    });
  }
}

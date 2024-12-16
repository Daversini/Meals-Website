import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealSearch } from '../../models/meal-search.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal',
  imports: [CommonModule],
  templateUrl: './meal.component.html',
  styleUrl: './meal.component.css'
})
export class MealComponent implements OnInit{

  mealSearches: MealSearch[] = [];

  constructor(private mealService: MealService) {}

  ngOnInit(): void {
    this.loadMealSearches()
  }

  loadMealSearches() {
    this.mealService.getMealSearches().subscribe((data) => {
      this.mealSearches = data
    })
  }
}

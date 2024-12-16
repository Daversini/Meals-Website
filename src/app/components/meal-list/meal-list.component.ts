import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MealSearch } from '../../models/meal-search.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-meal-list',
  imports: [CommonModule],
  templateUrl: './meal-list.component.html',
  styleUrl: './meal-list.component.css'
})
export class MealListComponent implements OnInit{

  mealSearches: MealSearch[] = []

  constructor(private mealService: MealService, private router: Router) {}

  ngOnInit(): void {
    this.loadMealSearches()
  }

  loadMealSearches() {
    this.mealService.getMealSearches().subscribe((data) => {
      this.mealSearches = data
    })
  }

  repeatSearch(mealName: string) {
    this.router.navigate(['/meal/search'], { queryParams: { name: mealName } });
  }
}

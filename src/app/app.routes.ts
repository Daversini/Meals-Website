import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MealComponent } from './components/meal/meal.component';
import { MealSearchComponent } from './components/meal-search/meal-search.component';
import { MealRandomComponent } from './components/meal-random/meal-random.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'meal', component: MealComponent},
    { path: 'meal/search', component: MealSearchComponent},
    { path: 'meal/random', component: MealRandomComponent}
];

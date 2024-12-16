import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { MealSearchComponent } from './components/meal-search/meal-search.component';
import { MealRandomComponent } from './components/meal-random/meal-random.component';

export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'meal/list', component: MealListComponent},
    { path: 'meal/search', component: MealSearchComponent},
    { path: 'meal/random', component: MealRandomComponent}
];

import { Routes } from '@angular/router';
import { DataInputComponent } from './pages/data-input/data-input.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'data-input',
  },
  {
    path: 'data-input',
    component: DataInputComponent,
  },
  {
    path: 'data-comparison',
    component: ComparisonComponent,
  }
];

import { Routes } from '@angular/router';
import { DataInputComponent } from './pages-old/data-input/data-input.component';
import { InputComponent } from './pages/input/input-page.component';
import { ComparisonComponent } from './pages/comparison/comparison.component';

export const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'data-input',
  },
  {
    path: 'data-input',
    component: InputComponent,
  },
  {
    path: 'comparison',
    component: ComparisonComponent,
  }
];

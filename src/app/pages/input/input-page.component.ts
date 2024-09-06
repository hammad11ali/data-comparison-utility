import { Component } from '@angular/core';
import { SelectComponent } from "../../components/select/select.component";
import { DataComparisonService } from '../../services/data-comparison.service';
import { DataInputComponent } from '../../components/data-input/data-input.component';

@Component({
  selector: 'app-input-page',
  standalone: true,
  imports: [SelectComponent, DataInputComponent],
  templateUrl: './input-page.component.html',
  styleUrl: './input-page.component.scss'
})
export class InputComponent {
  constructor(
    public dataComparisonService: DataComparisonService
  ) {
  }
}

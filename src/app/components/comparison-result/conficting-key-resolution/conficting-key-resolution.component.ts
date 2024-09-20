import { Component, Input } from '@angular/core';
import {
  ComparisonValue,
  ResolutionType,
} from '../../../services/data-comparison.service';
import { MatRadioModule } from '@angular/material/radio';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-conficting-key-resolution',
  standalone: true,
  imports: [
    MatRadioModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    TextFieldModule,
  ],
  templateUrl: './conficting-key-resolution.component.html',
  styleUrl: './conficting-key-resolution.component.scss',
})
export class ConfictingKeyResolutionComponent {
  @Input() comparisonValue!: ComparisonValue;
  selectedOption: 'old' | 'new' | 'custom' | '' = ''; // Default to new value
  customValue: string = '';

  onRadioChange() {
    let resolution = this.comparisonValue.resolution;
    if (!resolution) {
      resolution = {
        resolutionType: ResolutionType.KEEP_SOURCE,
        customValue: '',
      };
    }
    switch (this.selectedOption) {
      case 'old':
        resolution.resolutionType = ResolutionType.KEEP_SOURCE;
        resolution.customValue = this.comparisonValue.value.oldValue;
        this.customValue = this.comparisonValue.value.oldValue;
        break;
      case 'new':
        resolution.resolutionType = ResolutionType.KEEP_TARGET;
        resolution.customValue = this.comparisonValue.value.newValue;
        this.customValue = this.comparisonValue.value.newValue;
        break;
      case 'custom':
        resolution.resolutionType = ResolutionType.CUSTOM;
        resolution.customValue = this.customValue;
        break;
    }
    this.comparisonValue.resolution = resolution;
  }

  onInputChange() {
    if (!this.comparisonValue.resolution) {
      this.comparisonValue.resolution = {
        resolutionType: ResolutionType.CUSTOM,
        customValue: '',
      };
    }
    this.comparisonValue.resolution.customValue = this.customValue;
  }
}

import { Component, Input } from '@angular/core';
import { ComparisonResult } from '../../services/data-comparison.service';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ConfictingKeyResolutionComponent } from './conficting-key-resolution/conficting-key-resolution.component';
@Component({
  selector: 'app-comparison-result',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule,MatIconModule,MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    FormsModule,
    ConfictingKeyResolutionComponent,
    NgIf],
  templateUrl: './comparison-result.component.html',
  styleUrl: './comparison-result.component.scss'
})
export class ComparisonResultComponent {
  @Input({required:true}) comparisonResult:ComparisonResult|undefined;

  get ConflictingResults(){
    if(this.comparisonResult){
      return Object.keys(this.comparisonResult.conflictingKeys);
    }
    return [];
  }
  getConflictingKeyValue(key:string){
    if(this.comparisonResult?.conflictingKeys[key]?.resolution){
      return this.comparisonResult?.conflictingKeys[key]?.resolution.customValue;
    }
    else if(this.comparisonResult?.conflictingKeys[key]?.nested){
      return "Nested Object";
    }
    else {
      return "No Resolution";
    }
  }
}

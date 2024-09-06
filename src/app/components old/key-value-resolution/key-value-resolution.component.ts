import { Component, Input } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { ComparisonResult, MergeStatus } from '../../services-old/comparison-utility.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TextFieldModule } from '@angular/cdk/text-field';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { UploadComponent } from '../upload/upload.component';

@Component({
  selector: 'app-key-value-resolution',
  standalone: true,
  imports: [MatButtonModule, MatExpansionModule,MatIconModule,MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './key-value-resolution.component.html',
  styleUrl: './key-value-resolution.component.scss'
})
export class KeyValueResolutionComponent {
  @Input() comparisonResult!:ComparisonResult;
  MergeStatus= MergeStatus;
  get currentMergeStatus(){
    if(!this.comparisonResult.MergeStatus || this.comparisonResult.MergeStatus===MergeStatus.None){
      return 'Conflicted: '+this.comparisonResult.sourceValue ;
    }
    if(this.comparisonResult.MergeStatus===MergeStatus.New){
      return 'Custom: ' +this.comparisonResult.newValue ;
    }
    else if (this.comparisonResult.MergeStatus===MergeStatus.Source){
      return 'Source: ' +this.comparisonResult.sourceValue;
    }
    else if(this.comparisonResult.MergeStatus===MergeStatus.Target){
      return 'Target: ' +this.comparisonResult.targetValue;
    }
    return 'Removed';
  }
  get isConflicted(){
    return !this.comparisonResult.MergeStatus || this.comparisonResult.MergeStatus===MergeStatus.None;
  }
  useSource(){
    this.comparisonResult.MergeStatus=MergeStatus.Source;
    this.comparisonResult.newValue=this.comparisonResult.sourceValue;
  }
  useTarget(){
    this.comparisonResult.MergeStatus=MergeStatus.Target;
    this.comparisonResult.newValue=this.comparisonResult.targetValue;
  }
  useNew(){
    this.comparisonResult.MergeStatus=MergeStatus.New;
  }
}

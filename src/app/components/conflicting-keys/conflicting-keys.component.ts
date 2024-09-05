import { Component, Input } from '@angular/core';
import { ComparisonResult, MergeStatus } from '../../services/comparison-utility.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-conflicting-keys',
  standalone: true,
  imports: [MatButtonModule,MatIconModule],
  templateUrl: './conflicting-keys.component.html',
  styleUrl: './conflicting-keys.component.scss'
})
export class ConflictingKeysComponent {
  @Input() comparisonResults: ComparisonResult[] =[];
  useSource(comparisonResult: ComparisonResult){
    comparisonResult.MergeStatus=MergeStatus.Source;
  }
  useTarget(comparisonResult:ComparisonResult){
    comparisonResult.MergeStatus=MergeStatus.Target;
  }
}

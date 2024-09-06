import { Component, Input } from '@angular/core';
import { ComparisonResult, MergeStatus } from '../../services-old/comparison-utility.service';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { KeyValueResolutionComponent } from '../key-value-resolution/key-value-resolution.component';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-conflicting-keys',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,KeyValueResolutionComponent,MatAccordion,MatExpansionModule],
  templateUrl: './conflicting-keys.component.html',
  styleUrl: './conflicting-keys.component.scss'
})
export class ConflictingKeysComponent {
  @Input() comparisonResults: ComparisonResult[] =[];

  get ResolvedCount(){
    return this.comparisonResults.filter(x=>x.MergeStatus && x.MergeStatus!==MergeStatus.None).length;
  }
}

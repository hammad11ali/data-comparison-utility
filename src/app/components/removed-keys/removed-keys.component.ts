import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { ComparisonResult, MergeStatus } from '../../services/comparison-utility.service';
import { KeepRemoveKeyComponent } from '../keep-remove-key/keep-remove-key.component';
import { KeyValueResolutionComponent } from '../key-value-resolution/key-value-resolution.component';

@Component({
  selector: 'app-removed-keys',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,KeyValueResolutionComponent,MatAccordion,MatExpansionModule,KeepRemoveKeyComponent],
  templateUrl: './removed-keys.component.html',
  styleUrl: './removed-keys.component.scss'
})
export class RemovedKeysComponent {
  @Input() comparisonResults: ComparisonResult[] =[];

  get ResolvedCount(){
    return this.comparisonResults.filter(x=>x.MergeStatus && x.MergeStatus!==MergeStatus.None).length;
  }

}

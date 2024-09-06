import { Component, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { KeyValueResolutionComponent } from '../key-value-resolution/key-value-resolution.component';
import { ComparisonResult, MergeStatus } from '../../services-old/comparison-utility.service';
import { KeepRemoveKeyComponent } from '../keep-remove-key/keep-remove-key.component';

@Component({
  selector: 'app-new-keys',
  standalone: true,
  imports: [MatButtonModule,MatIconModule,KeyValueResolutionComponent,MatAccordion,MatExpansionModule,KeepRemoveKeyComponent],
  templateUrl: './new-keys.component.html',
  styleUrl: './new-keys.component.scss'
})
export class NewKeysComponent {
  @Input() comparisonResults: ComparisonResult[] =[];

  get ResolvedCount(){
    return this.comparisonResults.filter(x=>x.MergeStatus && x.MergeStatus!==MergeStatus.None).length;
  }
}

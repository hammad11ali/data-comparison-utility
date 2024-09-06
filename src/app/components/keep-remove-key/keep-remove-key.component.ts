import { Component, Input, signal, Signal } from '@angular/core';
import { ComparisonResult, ConflictType, MergeStatus } from '../../services/comparison-utility.service';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-keep-remove-key',
  standalone: true,
  imports: [MatSlideToggleModule],
  templateUrl: './keep-remove-key.component.html',
  styleUrl: './keep-remove-key.component.scss'
})
export class KeepRemoveKeyComponent {
  @Input() comparisonResult!: ComparisonResult;
  isEnabled= true;
  constructor() {
  }
  ngOnInit(): void {
    if(!this.comparisonResult.MergeStatus){
      this.setAdded();
    }
  }
  get value(){
    if(this.comparisonResult.type==ConflictType.EXTRA){
      return this.comparisonResult.sourceValue;
    }
    else if(this.comparisonResult.type==ConflictType.MISSING){
      return this.comparisonResult.targetValue;
    }
  }
  onChange($event:any){
    console.log($event);
    this.isEnabled=$event.checked;
    if($event.checked){
      this.setAdded();
    }
    else{
      this.comparisonResult.MergeStatus=MergeStatus.None;
    }
  }

  setAdded(){
    if(this.comparisonResult.type==ConflictType.EXTRA){
      this.comparisonResult.MergeStatus=MergeStatus.Target;
    }
    else if(this.comparisonResult.type==ConflictType.MISSING){
      this.comparisonResult.MergeStatus=MergeStatus.Source;
    }
  }

}

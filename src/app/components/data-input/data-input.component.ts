import { Component, Input } from '@angular/core';
import { FileInputComponent } from "../file-input/file-input.component";
import { FormsModule } from '@angular/forms';
import { ContentSource, DataComparisonService } from '../../services/data-comparison.service';

@Component({
  selector: 'app-data-input',
  standalone: true,
  imports: [FileInputComponent,FormsModule],
  templateUrl: './data-input.component.html',
  styleUrl: './data-input.component.scss'
})
export class DataInputComponent {
  @Input() type:ContentSource=ContentSource.SOURCE;
  ContentSource=ContentSource;
  constructor(
    public dataComparisonService: DataComparisonService
  ) {

  }
  onFileChange(event:string){
    if(this.type===ContentSource.SOURCE){
      this.dataComparisonService.sourceContent=event;
    }
    else{
      this.dataComparisonService.targetContent=event;
    }
  }
}

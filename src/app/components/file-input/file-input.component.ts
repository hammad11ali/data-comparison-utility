import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { FileParserService } from '../../services-old/file-parser.service';
import { DataComparisonService } from '../../services/data-comparison.service';

@Component({
  selector: 'app-file-input',
  standalone: true,
  imports: [MatIconModule],
  templateUrl: './file-input.component.html',
  styleUrl: './file-input.component.scss'
})
export class FileInputComponent {
  @Output() fileChange = new EventEmitter<string>();
  file:any;
  constructor(
    private fileParserService:FileParserService,
    private dataComparisonService:DataComparisonService
  ) { }
  selectFile(event:any){
    this.file = event.target.files[0];
    if(this.file){
      this.fileParserService.parseFile(this.file)?.then((result:any)=>{
        this.fileChange.emit(result);
      });
    }
  }
  deleteFile(){
    this.file = null;
  }
}

import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

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
  constructor() { }
  selectFile(event:any){
    this.file = event.target.files[0];

  }
  deleteFile(){
    this.file = null;
  }
}

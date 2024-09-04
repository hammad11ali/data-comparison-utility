import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-upload',
  standalone: true,
  imports: [NgIf],
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.scss'
})
export class UploadComponent {
  @Output() selectFile=new EventEmitter<any>();
  file:any;
  onFileDropped($event:any) {
    this.file=$event[0];
    this.selectFile.emit(this.file);
  }

  fileBrowseHandler(event:any) {
    this.file=event.target.files[0];
    this.selectFile.emit(this.file);
  }
  deleteFile() {
    this.file=null
  }

  formatBytes(bytes:any, decimals:number=2) {
    if (bytes === 0) {
      return '0 Bytes';
    }
    const k = 1024;
    const dm = decimals <= 0 ? 0 : decimals || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }

}

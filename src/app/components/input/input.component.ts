import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import {
  afterNextRender,
  Component,
  EventEmitter,
  inject,
  Injector,
  Input,
  Output,
  ViewChild,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { NgFor } from '@angular/common';
import { UploadComponent } from '../upload/upload.component';
import { FileParserService } from '../../services/file-parser.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    TextFieldModule,
    MatCardModule,
    NgFor,
    UploadComponent,
    FormsModule,
  ],
})
export class InputComponent {
  @ViewChild('autosize') autosize!: CdkTextareaAutosize;

  fileTypes = ['.json', '.xml'];
  selectedFileType = '';
  file: any;
  @Input() content = '';
  @Output() contentChange = new EventEmitter<string>();
  constructor(private fileParserService: FileParserService) {}
  onSelectFile(file: any) {
    this.file = file;
    this.readFile();
  }
  onFileChange() {
    this.readFile();
  }
  readFile() {
    if (this.file && this.selectedFileType) {
      this.fileParserService
        .parseFile(this.file, this.selectedFileType)
        ?.then((result: any) => {
          this.content = result + '\n\n\n';
          this.contentChange.emit(this.content);
        })
        .catch((error: any) => {
          console.error(error);
        });
    }
  }
}

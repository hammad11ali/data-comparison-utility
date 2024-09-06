import { Component } from '@angular/core';
import { FileInputComponent } from "../file-input/file-input.component";

@Component({
  selector: 'app-data-input',
  standalone: true,
  imports: [FileInputComponent],
  templateUrl: './data-input.component.html',
  styleUrl: './data-input.component.scss'
})
export class DataInputComponent {

}

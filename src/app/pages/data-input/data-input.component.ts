import { Component } from '@angular/core';
import { InputComponent } from "../../components/input/input.component";
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-data-input',
  standalone: true,
  imports: [InputComponent,MatButtonModule],
  templateUrl: './data-input.component.html',
  styleUrl: './data-input.component.scss'
})
export class DataInputComponent {
  sourceData='';
  targetData='';

  next(){

  }
}

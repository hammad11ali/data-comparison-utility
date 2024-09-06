import { Component } from '@angular/core';
import { InputComponent } from "../../components old/input/input.component";
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { StorageKeys, StorageService } from '../../services/storage.service';

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
  constructor(private router:Router,private storage:StorageService) { }

  next(){
    this.storage.store(StorageKeys.SOURCE_DATA,this.sourceData);
    this.storage.store(StorageKeys.TARGET_DATA,this.targetData);

    this.router.navigate(['/data-comparison']);
  }
}

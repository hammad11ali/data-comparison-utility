import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { StorageKeys, StorageService } from '../../services/storage.service';
import { ConflictingKeysComponent } from "../../components old/conflicting-keys/conflicting-keys.component";
import { NewKeysComponent } from "../../components old/new-keys/new-keys.component";
import { RemovedKeysComponent } from '../../components old/removed-keys/removed-keys.component';
import { ComparisonUtilityService } from '../../services-old/comparison-utility.service';
@Component({
  selector: 'app-comparison',
  standalone: true,
  imports: [ConflictingKeysComponent,RemovedKeysComponent, MatExpansionModule, MatSelectModule, MatFormFieldModule, MatInputModule, TextFieldModule, FormsModule, NgFor, ConflictingKeysComponent, NewKeysComponent],
  templateUrl: './comparison.component.html',
  styleUrl: './comparison.component.scss'
})
export class ComparisonComponent implements OnInit {

  @ViewChild('autosize') autosize!: CdkTextareaAutosize;
  selectedFileType='';
   fileTypes=[ '.json', '.xml'];
  constructor(
    public comparisonUtilityService: ComparisonUtilityService,
    private storage:StorageService
  ) { }
  ngOnInit(): void {
    this.selectedFileType=this.storage.get(StorageKeys.FileType)??'';
    this.comparisonUtilityService.compare();
  }

  get content(){
    try{
      return this.comparisonUtilityService.objectTostring(this.selectedFileType);
    }
    catch(e){
      return '';
    }

  }
}

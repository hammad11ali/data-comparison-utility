import { CdkTextareaAutosize, TextFieldModule } from '@angular/cdk/text-field';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ComparisonResult, ComparisonUtilityService } from '../../services/comparison-utility.service';
import { MatSelectModule } from '@angular/material/select';
import { NgFor } from '@angular/common';
import { StorageKeys, StorageService } from '../../services/storage.service';
import { ConflictingKeysComponent } from "../../components/conflicting-keys/conflicting-keys.component";
import { NewKeysComponent } from "../../components/new-keys/new-keys.component";
import { RemovedKeysComponent } from '../../components/removed-keys/removed-keys.component';
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

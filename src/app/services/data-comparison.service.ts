import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataComparisonService {
  fileTypes=['JSON','XML'];
  selectedFileType=this.fileTypes[0];
  constructor() { }
}

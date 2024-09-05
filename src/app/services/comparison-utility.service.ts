import { Injectable } from '@angular/core';
import { FileParserService } from './file-parser.service';
import { StorageKeys, StorageService } from './storage.service';


export enum ConflictType{
  MISSING,
  MISMATCH,
  EXTRA,
  None
}
export enum MergeStatus{
  Removed,
  Source,
  Target,
  None
}
export type ComparisonResult = {
  key:string,
  type:ConflictType,
  sourceValue:any,
  targetValue:any,
  MergeStatus?:MergeStatus
}

@Injectable({
  providedIn: 'root'
})
export class ComparisonUtilityService {
  comparisonResults:any[]=[];
  constructor(
    private fileParserService: FileParserService,
    private storage:StorageService
  ) { }

  compare(){
    const source=this.storage.get<string>(StorageKeys.SOURCE_DATA)??'';
    const target=this.storage.get<string>(StorageKeys.TARGET_DATA)??'';
    const type=this.storage.get<string>(StorageKeys.FileType)??'';
    let sourceObj:any={};
    let targetObj:any={};
    try{
      if(type==='.json'){
        sourceObj=this.fileParserService.jsonStrongtoObject(source);
        targetObj=this.fileParserService.jsonStrongtoObject(target);
      }else if(type==='.xml'){
        sourceObj=this.fileParserService.xmlStringToObject(source);
        targetObj=this.fileParserService.xmlStringToObject(target);
      }
    }
    catch(e){
      console.error('Error parsing source or target data:',e);
    }
    this.compareObjects(sourceObj, targetObj);

  }
  compareObjects(sourceObj:any, targetObj:any){
    this.comparisonResults=[];
    for(let key in sourceObj){
      if(targetObj[key]){
        if(sourceObj[key]!==targetObj[key]){
          this.comparisonResults.push({
            key:key,
            type:ConflictType.MISMATCH,
            sourceValue:sourceObj[key],
            targetValue:targetObj[key]
          });
        }
        else{
          this.comparisonResults.push({
            key:key,
            type:ConflictType.None,
            sourceValue:sourceObj[key],
            targetValue:targetObj[key]
          });
        }
      }else{
        this.comparisonResults.push({
          key:key,
          type:ConflictType.EXTRA,
          sourceValue:sourceObj[key],
          targetValue:null
        });
      }
    }
    for(let key in targetObj){
      if(!sourceObj[key]){
        this.comparisonResults.push({
          key:key,
          type:ConflictType.MISSING,
          sourceValue:null,
          targetValue:targetObj[key]
        });
      }
    }
  }

  get finalObject(){
    const object:any={};
    for (let i = 0; i < this.comparisonResults.length; i++) {
      if(this.comparisonResults[i].type!==ConflictType.None){
        object[this.comparisonResults[i].key]=this.comparisonResults[i].sourceValue;
      }
      else if(this.comparisonResults[i].type===ConflictType.MISMATCH){
        object[this.comparisonResults[i].key]=this.comparisonResults[i].targetValue;
      }
      else if(this.comparisonResults[i].type===ConflictType.EXTRA){
        object[this.comparisonResults[i].key]=this.comparisonResults[i].sourceValue;
      }
      else if(this.comparisonResults[i].type===ConflictType.MISMATCH){
        object[this.comparisonResults[i].key]=this.comparisonResults[i].targetValue;
      }
    }
    return object;
  }

  get Mismatches():ComparisonResult[]{
    return this.comparisonResults.filter((item)=>item.type===ConflictType.MISMATCH);
  }
  get Missing():ComparisonResult[]{
    return this.comparisonResults.filter((item)=>item.type===ConflictType.MISSING);
  }
  get Extra():ComparisonResult[]{
    return this.comparisonResults.filter((item)=>item.type===ConflictType.EXTRA);
  }
  get None():ComparisonResult[]{
    return this.comparisonResults.filter((item)=>item.type===ConflictType.None);
  }
}

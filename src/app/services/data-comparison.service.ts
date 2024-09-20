import { Injectable } from '@angular/core';
import { FileParserService } from './file-parser.service';
import { StorageKeys, StorageService } from './storage.service';
export enum ContentSource {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}
export type conflictingResult = ComparisonResult|{ oldValue: any; newValue: any };

export enum ResolutionType {
  KEEP_SOURCE = 'KEEP_SOURCE',
  KEEP_TARGET = 'KEEP_TARGET',
  CUSTOM = 'CUSTOM',
  REMOVE = 'REMOVE',
  KEEP = 'KEEP',
}
export type ResolutionResult = {
  resolutionType: ResolutionType;
  customValue?: any;
};

export type ComparisonValue = {
  value: any | conflictingResult;
  resolution?: ResolutionResult;
  nested?: boolean;
};

export type Resolution = Record<string, ResolutionResult>;

export type ComparisonResult = {
  addedKeys: Record<string, ComparisonValue>;
  removedKeys: Record<string, ComparisonValue>;
  conflictingKeys: Record<string, ComparisonValue>;
  same: Record<string, any>;
};

@Injectable({
  providedIn: 'root',
})
export class DataComparisonService {
  fileTypes = ['JSON', 'XML'];
  selectedFileType = this.fileTypes[0];
  sourceContent = '';
  targetContent = '';
  comparisonResult: ComparisonResult | undefined;
  constructor(private fileParser: FileParserService, private storage:StorageService) {
    this.sourceContent = this.storage.get(StorageKeys.SOURCE_DATA) || '';
    this.targetContent = this.storage.get(StorageKeys.TARGET_DATA) || '';
  }

  saveContent() {
    this.storage.store(StorageKeys.SOURCE_DATA, this.sourceContent);
    this.storage.store(StorageKeys.TARGET_DATA, this.targetContent);
  }

  createComparisonObject() {
    const sourceObject = this.fileParser.jsonStrongtoObject(this.sourceContent);
    const targetObject = this.fileParser.jsonStrongtoObject(this.targetContent);
    const result = this.compareObjects(sourceObject, targetObject);
    console.log('Comparison Result:', result);
    this.comparisonResult = result;
  }
  compare(key: string, oldVal: any, newVal: any,comparisonResult:ComparisonResult) {
     if (
      typeof oldVal === 'object' &&
      typeof newVal === 'object' &&
      oldVal !== null &&
      newVal !== null
    ) {
      let result = this.compareObjects(oldVal, newVal);
      if(result.addedKeys || result.removedKeys || result.conflictingKeys){
        comparisonResult.conflictingKeys[key] = { value: result, nested: true };
      }
      else{
        comparisonResult.same[key]=oldVal;
      }
    }
    else if (oldVal !== newVal) {
      comparisonResult.conflictingKeys[key]  ={value: { oldValue: oldVal, newValue: newVal }};
    }
    else{
      comparisonResult.same[key]=oldVal;
    }
  }
  compareObjects(
    oldObj: Record<string, any>,
    newObj: Record<string, any>
  ): ComparisonResult {
    const result: ComparisonResult = {
      addedKeys: {},
      removedKeys: {},
      conflictingKeys: {},
      same: {},
    };

    // Check for removed keys or conflicting keys
    for (const key in oldObj) {
      if (!(key in newObj)) {
        result.removedKeys[key] = { value: oldObj[key] };
      }
      else {
        this.compare(key, oldObj[key], newObj[key],result);
      }
    }
    for (const key in newObj) {
      if (!(key in oldObj)) {
        result.addedKeys[key] = { value: newObj[key] };
      }
    }

    return result;
  }

}

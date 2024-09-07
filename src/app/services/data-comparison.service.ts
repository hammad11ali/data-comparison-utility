import { Injectable } from '@angular/core';
import { FileParserService } from './file-parser.service';
export enum ContentSource {
  SOURCE = 'SOURCE',
  TARGET = 'TARGET',
}
export type conflictingResult =
  | { oldValue: any; newValue: any }
  | ComparisonResult;

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
  constructor(private fileParser: FileParserService) {}

  createComparisonObject() {
    const sourceObject = this.fileParser.jsonStrongtoObject(this.sourceContent);
    const targetObject = this.fileParser.jsonStrongtoObject(this.targetContent);
    // console.log('Source Object:',JSON.stringify(sourceObject));
    // console.log('Target Object:',JSON.stringify(targetObject));

    const result = this.compareObjects(sourceObject, targetObject);
    console.log('Comparison Result:', JSON.stringify(result));
  }
  compare(key: string, oldVal: any, newVal: any): conflictingResult {
    let result: { oldValue: any; newValue: any } | ComparisonResult;
    if (
      typeof oldVal === 'object' &&
      typeof newVal === 'object' &&
      oldVal !== null &&
      newVal !== null
    ) {
      const nestedResult = this.compareObjects(oldVal, newVal);
      result = nestedResult;
    } else {
      result = { oldValue: oldVal, newValue: newVal };
    }
    return result;
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
      } else if (oldObj[key] !== newObj[key]) {
        result.conflictingKeys[key] = {
          value: this.compare(key, oldObj[key], newObj[key]),
        };
      } else {
        result.same[key] = oldObj[key];
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

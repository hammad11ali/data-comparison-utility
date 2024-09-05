import { Injectable } from '@angular/core';
export const StorageKeys={
  SOURCE_DATA:'sourceData',
  TARGET_DATA:'targetData',
  FileType:'fileType'
}
@Injectable({
  providedIn: 'root',
})
export class StorageService {
    static instance: StorageService;
    constructor() {
      StorageService.instance = this;
    }
  // Store the value
  store(storageKey: string, value: any): void {
    const encryptedValue = (encodeURI(JSON.stringify(value)));
    localStorage.setItem(storageKey, encryptedValue);
  }

  // Get the value
  get<T>(storageKey: string): T | null {
    const ret = localStorage.getItem(storageKey);

    try {
      if (ret != null) {
        return JSON.parse(decodeURI((ret))) as T;
      }
    } catch (error) {
      console.error('Error while parsing stored value:', error);
    }

    return null;
  }

  removeStorageItem(storageKey: string): void {
    localStorage.removeItem(storageKey);
  }

  // Clear storage
  clear(): void {
    localStorage.clear();
  }
}

import { Injectable } from '@angular/core';
import {XMLParser} from "fast-xml-parser";
import { StorageKeys, StorageService } from '../services/storage.service';
@Injectable({
  providedIn: 'root'
})
export class FileParserService {

  constructor(
    private storage:StorageService
  ) { }

  parseFile(file:any, fileType:string) {
    if (fileType==='.json') {
      return this.parseJson(file);
    } else if (fileType==='.xml') {
      return this.parseXml(file);
    }
    return null;
  }
  parseJson(file:any) {
    this.storage.store(StorageKeys.FileType,'.json');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
        try {
          let result=event?.target?.result?.toString()??'';
          result=this.removeComments(result);
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };
    });
  }
  removeComments(str:string){
    return str.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, '$1');
  }

  parseXml(file:any) {
    this.storage.store(StorageKeys.FileType,'.xml');
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = (event) => {
        try {
          let result=event?.target?.result?.toString()??'' ;
          resolve(result);
        } catch (error) {
          reject(error);
        }
      };
    });
  }
  jsonStrongtoObject(json:string){
    return JSON.parse(json);
  }
  xmlStringToObject(xml:string) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xml, "text/xml");

    const json:any = {};
    const rootElement = xmlDoc.documentElement;

    if (rootElement) {
      const elements = rootElement.childNodes;

      for (let i = 0; i < elements.length; i++) {
        const element = elements[i] as any;
        if (element.nodeType === Node.ELEMENT_NODE) {
          let key = element.tagName;
          let value = element.textContent;
          if(key=='add'){
            key=element.attributes.key.nodeValue;
            value=element.attributes.value.nodeValue;
            json[key]=value;
          }else{

              if (!json[key]) {
                json[key] = [];
              }

              json[key].push({
                key: element.getAttribute("key"),
                value: value.trim()
              });
          }
        }
      }
    }

    return json;
  }

}

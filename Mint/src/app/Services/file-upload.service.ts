import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  upload(file: File) {
    throw new Error('Method not implemented.');
  }

  constructor() { }
}

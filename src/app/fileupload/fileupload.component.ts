import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-fileupload',
  templateUrl: './fileupload.component.html',
  styleUrls: ['./fileupload.component.css']
})
export class FileuploadComponent {

  constructor(private http : HttpClient){}

  upload(files) {
    if (files.length === 0)
      return;
  
    const formData = new FormData();
  
    for (const file of files) {
      formData.append(file.name, file);
    }
  
    const uploadReq = new HttpRequest('POST', this.baseUrl + 'FileManagement/upload', formData, {
      reportProgress: true,
    });
  
    this.http.request(uploadReq).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        this.progress = Math.round(100 * event.loaded / event.total);
      };
    });
  }

}

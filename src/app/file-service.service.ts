import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';





@Injectable({
  providedIn: 'root'
})
export class FileServiceService {
  constructor(private http: HttpClient) { }

  
    
  url = "http://localhost/apidata/file_upload.php";
  
  postdataFun(data:any){
    this.http.post(this.url,data);
  }
}

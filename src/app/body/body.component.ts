import { Component, OnInit } from '@angular/core';
// json to xml

import * as JsonToXML from "js2xmlparser";
import { ToastrService } from 'ngx-toastr';

import { ClipboardService } from 'ngx-clipboard';

 
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
}) 


export class BodyComponent implements OnInit {
  constructor(private toaster: ToastrService,private clipboardApi: ClipboardService) { }
  ngOnInit(): void {
  }

  falsedata = false;
  clearInput:any;
  displayval:any
  //empty input
  // empty_input:any;
  CovertjsontoXml(titleInput:any,event:any){
    event.preventDefault();
    if(titleInput == ''){
      this.toaster.warning('Json Requreid', 'warning');
    }else{
        try{
          let json = JSON.parse(titleInput);
          let xmlgenrate  = JsonToXML.parse("root", json);
          this.displayval = xmlgenrate;
          this.falsedata = true;
          // 
          //empty input 
          // this.empty_input = '';
          this.clearInput = '';    
        }
        catch(e){
          this.toaster.warning('Invalid Json ', 'warning');
          this.clearInput = '';   
        }
    }
  }
  Copyjsoncode(inputElement:any,event:any){
    let returntruefalse = this.clipboardApi.copyFromContent(inputElement)
    if(returntruefalse == true){
      this.toaster.info('Copied Clipboard', 'info');
    }else{
      this.toaster.warning('Json Requreid', 'warning');
    }
  
  }
}

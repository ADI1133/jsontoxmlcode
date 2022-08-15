import { Component, OnInit } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { jsPDF } from "jspdf";


import { FileServiceService } from 'src/app/file-service.service';



@Component({
  selector: 'app-jpgtopdf',
  templateUrl: './jpgtopdf.component.html',
  styleUrls: ['./jpgtopdf.component.css']
})
export class JpgtopdfComponent implements OnInit {
  files: File[] = [];
  postMultimedias: any;
 constructor(private _snackBar: MatSnackBar, public dialog: MatDialog,public Filedata:FileServiceService) {}
  ngOnInit(): void {
  }

onSelect(event:any) {
  this.files.push(...event.addedFiles);
}

onRemove(data:any) {
  this.files.splice(this.files.indexOf(data), 1);
}

CovertImagePdf(){
  let imageArray:any = [];
  let data:any;
  const doc = new jsPDF('l', 'mm', 'a4');
  for (var i = 0; i<this.files.length; i++){
    // this.getBase64(this.files[i]);
    const reader = new FileReader();
    reader.readAsDataURL(this.files[i]);
    reader.onload = function () {
      // let img = new Image();


      // data = reader.result;
      // doc.setPage(i + 2);
      // doc.addImage(data, 'png', 10, 10, 150, 76);

    
        doc.save('Photos.pdf');
    

      // allfiles = reader.result;
      // var url_base64jp = reader.toDataURL("image/jpg");
      // doc.addImage(url_base64jp, 'png', 15, 40, 180, 160);
      // doc.addImage(data, 'png', 10, 10, 150, 76);
      //  doc.save("data.pdf");
      // 
    }
  }
 
}

}



import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JpgtopdfComponent } from './jpgtopdf/jpgtopdf.component';

// Run this command >ng add @angular/material then import metadilog
import { MatDialogModule } from '@angular/material/dialog';

import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSnackBarModule} from '@angular/material/snack-bar';


import { NgxDropzoneModule } from 'ngx-dropzone';

import { HttpClientModule } from '@angular/common/http';

// import { ToolsModule } from './tools/tools.module'; 
// import FileDrag
// import { FileDragNDropDirective } fr 
@NgModule({
  declarations: [
    JpgtopdfComponent,
   
  ],
  imports: [
    CommonModule,
    MatDialogModule,MatIconModule,MatInputModule,MatListModule,MatButtonModule,
    MatGridListModule,MatSnackBarModule,NgxDropzoneModule,HttpClientModule,
  ],
  exports:[
    JpgtopdfComponent,
   
   
  ]
})
export class ToolsModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FileUploadModule } from './file-upload/file-upload.module';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports:      [ BrowserModule, FormsModule, FileUploadModule, MatButtonModule ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

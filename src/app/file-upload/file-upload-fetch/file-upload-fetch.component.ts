import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'file-upload-fetch',
  templateUrl: './file-upload-fetch.component.html',
  styleUrls: ['./file-upload-fetch.component.scss']
})
export class FileUploadFetchComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() selectedFilesShow: boolean = false;
  fileUploadId: any;
  public files: File[] = [];
  
  @Output() afterSelectionMethod: EventEmitter<any[]> = new EventEmitter();


  constructor() { }

  ngOnInit() {
    this.fileUploadId = Object.keys(this.parentForm.controls)[0];

    this.parentForm.addControl(this.fileUploadId, new FormControl(''));
  }

  onFilesChange(f){
    this.files = f;

    if(this.afterSelectionMethod)
      this.afterSelectionMethod.emit(this.files);
  }

  check(){
    //var param = {uploadFormID: this.files};
    //this.parentForm.patchValue(param);
    return this.parentForm.get("uploadFormId").value;
  }

}

import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FileUploadModalComponent } from '../file-upload-modal/file-upload-modal.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'file-upload-form',
  templateUrl: './file-upload-form.component.html',
  styleUrls: ['./file-upload-form.component.css']
})
export class FileUploadFormComponent implements OnInit {

  @Input() parentForm: FormGroup;
  @Input() placeHolderText: string;

  public itemIDSpesification;
  public itemDefSpesification;

  private _selectedItems: any[];
  get selectedItems(): any[] {
    return this._selectedItems;
  }

  set selectedItems(v: any[]) {
    this._selectedItems = v;
    if (this._selectedItems) {
      this.parentForm.get(Object.keys(this.parentForm.controls)[1]).setValue(this._selectedItems);
      this.parentForm.get(Object.keys(this.parentForm.controls)[2]).setValue(this._selectedItems.length + " file(s) selected!");
    } else {
      this.parentForm.get(Object.keys(this.parentForm.controls)[1]).setValue(null);
      this.parentForm.get(Object.keys(this.parentForm.controls)[2]).setValue(null);
    }
  }

  constructor(private modal: MatDialog) { }

  ngOnInit() {
    debugger
    this.itemIDSpesification = Object.keys(this.parentForm.controls)[1];
    this.itemDefSpesification = Object.keys(this.parentForm.controls)[2];
  }

  changeFile(f){
    debugger;
  }

  openModal(e: Event) {
    const dialogRef = this.modal.open(FileUploadModalComponent, {
      panelClass: "modal-md",
      height: '400px',
      width: '50%'
    });
    dialogRef.componentInstance.selectedItems = this.selectedItems;
    
    dialogRef.afterClosed().subscribe(result => {
      if (result !== undefined) {
        this.selectedItems = result;
      }
    });
  }

}

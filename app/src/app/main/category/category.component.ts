import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddEditCategoryComponent } from '../add-edit-category/add-edit-category.component';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  constructor(private matDialog: MatDialog){}
  faPlus =faPlus;
  faDeleteLeft= faDeleteLeft;
  faEdit = faEdit ;
  
  openDialog(){
    this.matDialog.open(AddEditCategoryComponent);
  }

 


}

import { Component } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { MatDialog } from '@angular/material/dialog';
import { AddEditTransactionComponent } from '../add-edit-transaction/add-edit-transaction.component';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {

  constructor(private matDialog: MatDialog){}
  faPlus =faPlus;
  faDeleteLeft= faDeleteLeft;
  faEdit = faEdit ;

  openDialog(){
    this.matDialog.open(AddEditTransactionComponent);
  }

}

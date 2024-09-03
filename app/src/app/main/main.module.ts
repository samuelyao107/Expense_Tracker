import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoryComponent } from './category/category.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LayoutComponent } from './layout/layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartModule } from 'angular-highcharts';
import { AddEditCategoryComponent } from './add-edit-category/add-edit-category.component';
import { AddEditTransactionComponent } from './add-edit-transaction/add-edit-transaction.component';
import {MatDialogModule} from '@angular/material/dialog';

@NgModule({
  declarations: [
    DashboardComponent,
    CategoryComponent,
    TransactionComponent,
    LayoutComponent,
    AddEditCategoryComponent,
    AddEditTransactionComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    FontAwesomeModule,
    ChartModule,
    MatDialogModule
  ]
})
export class MainModule { }

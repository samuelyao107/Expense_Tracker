import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TransactionComponent } from './transaction/transaction.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  {path:'', component: LayoutComponent, children: [
    {path:'', redirectTo: 'dashboard', pathMatch: 'full'},
    {path:'dashboard', component:DashboardComponent},
    {path:'transaction', component: TransactionComponent},
    {path:'category', component: CategoryComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }

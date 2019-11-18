import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablePageComponent } from './table-page.component';
import { ComponentsModule } from '../../shared/components/components.module';

const routes: Routes = [
  { path: '', component: TablePageComponent },
];

@NgModule({
  declarations: [TablePageComponent],
  imports: [
    ComponentsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TablePageModule { }

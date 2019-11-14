import { NgModule } from "@angular/core";
import { TableComponent } from './table/table.component';
import { CommonModule } from '@angular/common';
declare var $: any;

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TableComponent
  ],
  providers: [],
  exports: [
    TableComponent
  ]
})

export class ComponentsModule {
}
import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
// declare var $: any;

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($('body'));
  }

}

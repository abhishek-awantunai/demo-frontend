import { Component, OnInit, Renderer2, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-renderer',
  templateUrl: './renderer.component.html',
  styleUrls: ['./renderer.component.scss']
})

export class RendererComponent implements OnInit {

  /**
  * In most cases you will want to use {static: false}. Default for angular 9 
  * Setting it like this will ensure query matches that are dependent on binding resolution 
  * (like structural directives *ngIf, etc...) will be found.

  * What is the difference between static and dynamic queries? 
  * The static option for @ViewChild() and @ContentChild() queries determines when the query 
  * results become available.
  * 
  * With static queries (static: true) - The query resolves once the view has been created, 
  * but before change detection runs. The result, though, will never be updated to reflect 
  * changes to your view, such as changes to ngIf and ngFor blocks.
  * 
  * With dynamic queries (static: false) - The query resolves after either ngAfterViewInit() 
  * or ngAfterContentInit() for @ViewChild() and @ContentChild() respectively. 
  * The result will be updated for changes to your view, such as changes to ngIf and ngFor blocks.
  */

  @ViewChild('pTag', { read: false, static: true }) private pTag: ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    this.appendChild();
  }

  addClass() {
    this.renderer.addClass(this.pTag.nativeElement, 'no-margin');
  }

  appendChild() {
    /**
    * Case 1 :
    * 
    */

    // Get some sample html content in the form of string.
    const child = `<span> Some span text form case 1 </span>`;

    // Convert this string to HTML nodes using Domparser special parsefrom string method.
    const doc = new DOMParser().parseFromString(child, "text/xml");

    // Use Renderer appendchild method to append this span to the p tag
    this.renderer.appendChild(this.pTag.nativeElement, doc.firstChild);

    /**
     * Case 2 :
     */

    const child1 = this.renderer.createElement('span');
    const text = this.renderer.createText(' Sample span text form case 2 ');

    this.renderer.appendChild(child1, text);

    this.renderer.appendChild(this.pTag.nativeElement, child1);
  }
}
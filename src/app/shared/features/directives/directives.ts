/*
  - Directives in Angular
  -
*/

import { Directive, ElementRef, Renderer2 } from "@angular/core";
import { $ } from 'protractor';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[customDirective]'
})

export class AppBackgroundColor {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.updateBackgrounndColor('red');
  }

  updateBackgrounndColor(color: string) {
    /**
     * ADDCLASS - used to add custom classes to a native element
     * @param el: the target element
     * @param calssName: name of class  
     */
    this.renderer.addClass(this.el.nativeElement, 'disabled');

    /** APPENDCHILD
     * APPENDCHILD - used to append an element inside the hosted element
     * @param el: the target element
     * @param child: new element that needs to be added to the target container as a child
     */

    const case1 = false;
    if (case1) {
      // Create an element. 
      const child = document.createElement('div');

      // Fill some text inside it. 
      child.textContent = 'This is our first box';

      // Add a class to this element
      child.classList.add('box');

      // Add an event listener to this element
      child.addEventListener('click', function () {
        alert('assembled successfully');
      });

      // Finally add this newly created child node to 
      this.renderer.appendChild(this.el.nativeElement, child);
    } else {
      // Define your template in the form of string in a variable 
      const child1 = `
      <div>
        <p class="red">This is some other sample file to be handled and to be dealt with.</p>
      </div>  
      `;

      // Create a new instance of Domparser and convert string to html document and then store it in a variable
      const doc = new DOMParser().parseFromString(child1, "text/xml");

      // Extract HTML nodes from the above document and then pass it as child to be appended 
      this.renderer.appendChild(this.el.nativeElement, doc.firstChild);
    }

    /**
     * CreateComment - 
     * @param str - Sr
     */
    this.renderer.appendChild(this.el.nativeElement, this.renderer.createComment('CommentCheck'));
    console.log(this.renderer.createComment('CommentCheck'));

  }
}
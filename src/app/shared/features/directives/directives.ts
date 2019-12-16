/*
  - Directives in Angular
  -
*/

import { HostBinding, Directive, ElementRef, Renderer2, HostListener } from "@angular/core";
import { $ } from 'protractor';
import { DomSanitizer } from '@angular/platform-browser';

@Directive({
  selector: '[customDirective]'
})

export class AppBackgroundColor {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    console.log('called');
    this.updateBackgrounndColor('red');
  }

  updateBackgrounndColor(color: string) {
    /**
     * AddClass - used to add custom classes to a native element
     * @param el: the target element
     * @param calssName: name of class  
     */
    this.renderer.addClass(this.el.nativeElement, 'disabled');

    /** 
     * AppendChild - used to append an element inside the hosted element
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
     * CreateComment - Used to add a comment
     * @param str - Sample sting to be added as a comment
     */
    this.renderer.appendChild(this.el.nativeElement, this.renderer.createComment('This is a simple comment that is added using the renderer class of Angular'));

    /**
     * CreateElement - Used to create a new element
     * @param str - name of the tag with which the element needs to be created
     */
    const p = this.renderer.createElement('div')
    this.renderer.addClass(p, 'custom-class');

    /** CreateText - creates a text node
     * @param str - string with which text node will be created 
     */
    const text = this.renderer.createText('Sample text and sample ');
    this.renderer.appendChild(p, text);
    this.renderer.appendChild(this.el.nativeElement, p);

    /**
     * Destroy - For a DOM Renderer, destroy() is an empty method that doesn't do anything - 
     * It's just a thin wrapper over the DOM APIs
     * The destroy hook is there in case you want to implement your own custom renderer where destroying it might make more sense
     */
    this.renderer.destroy();

    /**
     * InsertBefore - Function used to insert between two elements provided
     * @param parentNode - Newly cerated element must be inside this container  
     * @param - new_div -  new element to be added
     * @param - nativeElement - element just before which the new element needs to be added
     */

    const new_div = this.renderer.createElement('div');
    const new_text = this.renderer.createText('This is some sample text coming form insertBeforeRenderer function');
    this.renderer.appendChild(new_div, new_text);
    const parentNode = this.el.nativeElement.parentNode;
    this.renderer.insertBefore(parentNode, new_div, this.el.nativeElement);


    /**
     * Listen - Function used to listen certain events associated with an element 
     * just like Hostlistener
     */
    this.renderer.listen(this.el.nativeElement, 'click', function () {
      console.log('check for it!!!');
    });

  }

  /**
  * 
  */

  @HostListener('click')
  clickEvent() {
    console.log('click event is called');
  }

}


@Directive({
  selector: '[apprainbow]'
})

export class AppRainbowDirective {
  constructor() {
    console.log('object');
  }

  possibleColors = [
    'darksalmon', 'hotpink', 'lightskyblue', 'goldenrod', 'peachpuff',
    'mediumspringgreen', 'cornflowerblue', 'blanchedalmond', 'lightslategrey',
    'red', 'black', 'yellow', 'green', 'orange'
  ];

  @HostBinding('style.color') color: string;
  @HostBinding('style.border-color') borderColor: string;

  @HostListener('keydown') newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.borderColor = this.possibleColors[colorPick];
  }
}
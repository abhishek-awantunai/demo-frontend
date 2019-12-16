import { Component, Renderer2, ElementRef, ViewChild } from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomePageComponent {
  /**
    * if read is true then we further can't add any more elements to that 
    * element as we do have access of it in read mode only 
    */

  @ViewChild('abcd', { 'read': false, 'static': true })
  private abcd: ElementRef;

  constructor(private renderer: Renderer2) {

  }

  onClick() {
    const li = this.renderer.createElement('li');
    const text = this.renderer.createText('Click here to add LI');
    this.renderer.appendChild(li, text);
    this.renderer.appendChild(this.abcd.nativeElement, li);
  }
}
import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[highlightMouse]'
})
export class HighlightMouseDirective {

  @HostListener('mouseenter') onmouseover(){
    // this._render.setElementStyle(
    //   this._elementRef.nativeElement,'background-color','yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  @HostListener('mouseleave') onmouseleave(){
    // this._render.setElementStyle(
    //   this._elementRef.nativeElement,'background-color','white'
    // );
    this.backgroundColor = 'white';

  }

  //forma 1
  // @HostBinding('style.backgroundColor') backgroundColor: string;
  //forma 2
  @HostBinding('style.backgroundColor') get setColor(){
    //codigo extra
    return this.backgroundColor;
  }

  //forma 2
  private backgroundColor: string;
  
  constructor(
    // private _elementRef: ElementRef,
    // private _render: Renderer
  ) { }

}

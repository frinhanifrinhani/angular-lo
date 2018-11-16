import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  // selector: 'p[fundoAmarelo]'
  selector: '[fundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor(
    private _elementRef: ElementRef,
    private _renderer: Renderer
    ) { 
    //console.log(this._elementRef);
    //Vulnerable -->
    //this._elementRef.nativeElement.style.backgroundColor = 'yellow';
      this._renderer.setElementStyle(
          this._elementRef.nativeElement,
          'background-color',
          'yellow'
          );
  }

}

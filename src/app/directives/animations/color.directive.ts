import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[randomColor]',
})
export class ColorDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('randomColor') set activateDirective(active: boolean) {
    if (active) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'color',
        this.getRandomColor()
      );
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'transition',
        '0.5s'
      );
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'color');
    }
  }

  getRandomColor(): string {
    return '#' + (((1 << 24) * Math.random()) | 0).toString(16);
  }
}

import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[randomSize]',
})
export class SizeDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('randomSize') set activateDirective(active: boolean) {
    if (active) {
      const randomSize = Math.random() * 4;
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'transform',
        `scale(${randomSize})`
      );
      this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '1s');
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'transform');
    }
  }
}

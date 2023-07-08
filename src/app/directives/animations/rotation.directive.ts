import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[randomRotation]',
})
export class RotationDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('randomRotation') set activateDirective(active: boolean) {
    if (active) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'transform',
        `rotate(${this.getRandomRotation()}deg)`
      );
      this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '2s');
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'transform');
    }
  }

  getRandomRotation(): number {
    return Math.random() * (360 + 360 + 1) - 360;
  }
}

import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[randomTranslation]',
})
export class TranslationDirective {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @Input('randomTranslation') set activateDirective(active: boolean) {
    if (active) {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'transform',
        `translate(${this.getRandomTranslation()}px,${this.getRandomTranslation()}px)`
      );
      this.renderer.setStyle(this.elementRef.nativeElement, 'transition', '1s');
    } else {
      this.renderer.removeStyle(this.elementRef.nativeElement, 'transform');
    }
  }

  getRandomTranslation(): number {
    return Math.random() * (200 + 200 + 1) - 200;
  }
}

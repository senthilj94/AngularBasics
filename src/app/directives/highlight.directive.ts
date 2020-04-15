import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor;

  constructor(public eleRef: ElementRef) {}

  @HostListener('mouseenter') mouseEnter() {
    this.eleRef.nativeElement.style.color = this.highlightColor;
  }

  @HostListener('mouseleave') mouseLeave() {
    this.eleRef.nativeElement.style.color = 'black';
  }
}

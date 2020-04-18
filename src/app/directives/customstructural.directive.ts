import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appCustomstructural]'
})
export class CustomstructuralDirective {

  rendered = false;
  @Input() set appCustomstructural(value) {
    if (value && !this.rendered) {
      this.container.createEmbeddedView(this.temRef);
      this.rendered = true;
    } else if (!value && this.rendered) {
      this.container.clear();
      this.rendered = false;
    }
  }
  constructor(private temRef: TemplateRef<any>, private container: ViewContainerRef) { }

}

import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]'
})
export class HighlightOnFocusDirective {
  @Input() appHighlightOnFocus = '';
  constructor(private el: ElementRef) {}

  @HostListener('focusin') onMouseEnter() {
    this.highlight(this.appHighlightOnFocus || 'yellow');
  }
  @HostListener('focusout') onMouseLeave() {
    this.highlight('');
  }
  private highlight(color:string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}

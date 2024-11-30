import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appHighlightOnFocus]',
  standalone: true
})
export class HighlightOnFocusDirective {
  @Input('appHighlightOnFocus') highlightColor:string="";


  constructor(private el: ElementRef) {

    this.el.nativeElement.addEventListener('focus', () => {
      this.highlight(this.highlightColor || 'lightblue');
    });

    this.el.nativeElement.addEventListener('blur', () => {
      this.highlight('white');
    });
  }




  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }



}

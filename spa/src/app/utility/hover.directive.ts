import { Directive, ElementRef, Renderer2,HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private elementRef:ElementRef,private renderer:Renderer2) {
      console.log(elementRef);

   }
   @HostBinding("innerText") text:string="Initial Text";
   @HostListener('mouseover') onHover() {
    this.renderer.setStyle(this.elementRef.nativeElement,'color','red');
    
    this.text="Mouse Over";
  }
  @HostListener('mouseleave') onLeave() {
    this.renderer.setStyle(this.elementRef.nativeElement,'color','blue');
    this.text="Mouse Leave";
  }

}

/*
<p appHover></p>
*/

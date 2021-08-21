import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appUnderline]'
})
export class UnderlineDirective {

    
  constructor(private elem:ElementRef){}

  @HostListener("click") onClicks(){
    this.textApp("line-through")
  }

  @HostListener("dblclick") onDoubleClicks(){
    this.textApp("None")
  }

  private textApp(action:string){
    this.elem.nativeElement.style.textDecoration=action;

  }

}

import {
  Directive, ElementRef, Input, OnInit, Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCardMarkerColor]',
})
export class CardMarkerColorDirective implements OnInit {
  colorClass = '';

  @Input() Date?:string;

  constructor(private elementref: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.defineColor();
    this.renderer.addClass(this.elementref.nativeElement, this.colorClass);
  }

  defineColor() {
    const date = new Date(this.Date as string).getTime();
    if (date > this.SevenDaysPassedTime()) {
      this.colorClass = 'blue';
    } else if (date > this.getTimeMonthsPassed(1)) {
      this.colorClass = 'green';
    } else if (date < this.getTimeMonthsPassed(6)) {
      this.colorClass = 'red';
    }
  }

  SevenDaysPassedTime() {
    return Date.now() - 7 * 24 * 60 * 60 * 1000;
  }

  getTimeMonthsPassed(monthsPassed: number) {
    const currdate = new Date();
    const currmonth = currdate.getMonth();
    currdate.setMonth(currmonth - monthsPassed);
    return currdate.getTime();
  }
}

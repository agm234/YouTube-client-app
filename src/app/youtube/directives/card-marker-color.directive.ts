import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardMarkerColor]',
})
export class CardMarkerColorDirective implements OnInit {
  colorClass:string = '';

  @Input() date?:string;

  constructor(private elementref: ElementRef,
    private renderer: Renderer2) {
  }

  ngOnInit() {
    this.defineColor();
    this.renderer.addClass(this.elementref.nativeElement, this.colorClass);
  }

  defineColor() {
    const date = new Date(this.date as string).getTime();
    this.colorClass = this.colorSelection(date);
  }

  sevenDaysPassedTime() {
    return Date.now() - 7 * 24 * 60 * 60 * 1000;
  }

  getTimeMonthsPassed(monthsPassed: number) {
    const currdate = new Date();
    const currmonth = currdate.getMonth();
    currdate.setMonth(currmonth - monthsPassed);
    return currdate.getTime();
  }

  colorSelection(date:number) {
    if (date > this.sevenDaysPassedTime()) return 'blue';
    if (date > this.getTimeMonthsPassed(1)) return 'green';
    if (date < this.getTimeMonthsPassed(6)) return 'red';
    return 'yellow';
  }
}

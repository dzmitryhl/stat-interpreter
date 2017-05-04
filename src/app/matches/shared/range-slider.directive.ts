import { Directive, ElementRef, OnInit, OnChanges, SimpleChanges, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core'
import * as jquery from "jquery"
declare const $: JQueryStatic;


@Directive({
  selector: '[appRangeSlider]'
})
export class RangeSliderDirective implements OnInit, OnChanges {

  @Input() step: number;

  @Input() rangeMin: number;
  @Input() rangeMax: number;

  @Input() valueMin: number;
  @Input() valueMax: number;

  update: boolean = true;

  @Output() minValueChanged = new EventEmitter<number>();
  @Output() maxValueChanged = new EventEmitter<number>();

  constructor(private elementRef: ElementRef, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    
    let that = this;
    let sliderObj = $(this.elementRef.nativeElement);

    let sliderStep: number = 1;

    if (this.step) {
      sliderStep = this.step;
    }

    sliderObj.slider({
      range: true,
      min: this.rangeMin,
      max: this.rangeMax,
      step: sliderStep,
      values: [ this.valueMin ? this.valueMin : this.rangeMin, this.valueMax ? this.valueMax : this.rangeMax ],
      change: function(event, ui : any) {
        if (that.update) {
          if (ui.handleIndex === 0) {
            that.minValueChanged.emit(ui.value);
          } else if (ui.handleIndex === 1) {
            that.maxValueChanged.emit(ui.value);
          }
        }
        that.update = true;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.valueMin && !changes.valueMin.firstChange) {
      this.update = true;
      let currentValue: number = parseFloat(changes.valueMin.currentValue);
      if (isNaN(currentValue) || currentValue < this.rangeMin) {
        if (changes.valueMin.currentValue === null) {
          currentValue = this.rangeMin;
          this.update = false;
        } else {
          currentValue = changes.valueMin.previousValue;
        }
      }
      $(this.elementRef.nativeElement).slider("values", 0, currentValue);
      this.cdr.detectChanges();
    }

    if (changes.valueMax && !changes.valueMax.firstChange) {
      let currentValue: number = parseFloat(changes.valueMax.currentValue);
      this.update = true;
      if (isNaN(currentValue) || currentValue > this.rangeMax) {
        if (changes.valueMax.currentValue === null) {
          currentValue = this.rangeMax;
          this.update = false;
        } else {
          currentValue = changes.valueMax.previousValue;
        }
      }
      $(this.elementRef.nativeElement).slider("values", 1, currentValue);
      this.cdr.detectChanges();
    }
  }
}

import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core'
import * as jquery from "jquery"
declare const $: JQueryStatic;

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}

  @Input() initialValue: Date;
  @Output() dateSelected = new EventEmitter<Date>();

  ngOnInit(): void {
    let datePickerObj = $(this.elementRef.nativeElement);
    let that = this;
    datePickerObj.datepicker({
      onSelect: function(options: any) {
        that.dateSelected.emit(new Date(options));
      }
    });
    if (this.initialValue) {
      datePickerObj.datepicker('setDate', this.initialValue);
      this.dateSelected.emit(this.initialValue);
    }
  }
}

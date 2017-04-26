import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core'
import * as jquery from "jquery"
declare const $: JQueryStatic;

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}

  @Input() initialValue: Date;
  @Output() dateSelected = new EventEmitter<Date>();

  ngOnInit(): void {
    let datePickerObj = $(this.elementRef.nativeElement);
    datePickerObj.datepicker({
      autoclose: true
    });

    if (this.initialValue) {
      datePickerObj.datepicker('setDate', this.initialValue);
      this.dateSelected.emit(this.initialValue);
    }

    let that = this;
    datePickerObj.on('changeDate', function(e) {
      that.dateSelected.emit(e.date);
    })
  }
}

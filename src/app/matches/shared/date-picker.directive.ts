import { Directive, ElementRef, OnInit, Output, EventEmitter } from '@angular/core'
import * as jquery from "jquery"
declare const $: JQueryStatic;

@Directive({
  selector: '[appDatePicker]'
})
export class DatePickerDirective implements OnInit{
  constructor(private elementRef: ElementRef) {}

  @Output() dateSelected = new EventEmitter<Date>();

  ngOnInit(): void {

    let datePickerObj = $(this.elementRef.nativeElement);
    datePickerObj.datepicker({
      autoclose: true
    });

    let that = this;
    datePickerObj.on('changeDate', function(e) {
      that.dateSelected.emit(e.date);
    })
  }
}

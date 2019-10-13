import { Component, OnInit, ElementRef, AfterViewInit, Directive } from '@angular/core';

@Directive({ 
  selector: '[cpColor]' 
})
export class CpColorComponent implements OnInit, AfterViewInit {

  constructor(public elRef: ElementRef) {
    console.log('constructor');
  }
  ngOnInit() {
    console.log('ngOnInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    this.elRef.nativeElement.style.color = 'red';
  }

  change(changedColor: String) {
    this.elRef.nativeElement.style.color = changedColor;
  }
}

import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cp-color',
  templateUrl: './cp-color.component.html',
  styleUrls: ['./cp-color.component.css']
})
export class CpColorComponent implements OnInit, AfterViewInit {

  constructor(private elRef: ElementRef) {
  }
  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elRef.nativeElement.style.color = 'red';
  }
  change(changedColor: String) {
    this.elRef.nativeElement.style.color = changedColor;
  }

}

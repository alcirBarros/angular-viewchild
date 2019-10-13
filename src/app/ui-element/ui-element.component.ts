import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { NumberComponent } from '../number/number.component';
import { StopwatchComponent } from '../stopwatch/stopwatch.component';
import { CpColorComponent } from '../cp-color/cp-color.component';

@Component({
  selector: 'app-ui-element',
  templateUrl: './ui-element.component.html',
  styleUrls: ['./ui-element.component.css']
})
export class UiElementComponent implements OnInit, AfterViewInit {

  @ViewChild(NumberComponent, null)
  private numberComponent: NumberComponent;
  
  @ViewChild(StopwatchComponent, null)
  private stopwatchComponent: StopwatchComponent;

  @ViewChild(CpColorComponent, null)
  private cpColorDirective: CpColorComponent;

  @ViewChild('title', null)
  private elTitle: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.elTitle.nativeElement.style.backgroundColor = 'cyan';
    this.elTitle.nativeElement.style.color = 'red';
  }
  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }
  startStopwatch() {
    this.stopwatchComponent.start();
  }
  stopStopwatch() {
    this.stopwatchComponent.stop();
  }
  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }

}

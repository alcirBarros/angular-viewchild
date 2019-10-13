import { Component, OnInit, ViewChild } from '@angular/core';
import { NumberComponent } from '../number/number.component';

@Component({
  selector: 'app-number-parent',
  templateUrl: './number-parent.component.html',
  styleUrls: ['./number-parent.component.css']
})
export class NumberParentComponent implements OnInit {

  
  @ViewChild(NumberComponent, null)
  private numberComponent: NumberComponent;

  constructor() { }

  ngOnInit() {
  }

  increase() {
    this.numberComponent.increaseByOne();
  }
  decrease() {
    this.numberComponent.decreaseByOne();
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { CpColorComponent } from '../cp-color/cp-color.component';

@Component({
  selector: 'app-cp-color-parent',
  templateUrl: './cp-color-parent.component.html',
  styleUrls: ['./cp-color-parent.component.css']
})
export class CpColorParentComponent implements OnInit {

  @ViewChild(CpColorComponent, null)
  private cpColorDirective: CpColorComponent;

  constructor() { }

  ngOnInit() {
  }




  changeColor(color: string) {
    this.cpColorDirective.change(color);
  }
}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cp-theme',
  templateUrl: './cp-theme.component.html',
  styleUrls: ['./cp-theme.component.css']
})
export class CpThemeComponent implements OnInit, AfterViewInit {

  @ViewChild('name', null) 
  private elName : ElementRef;
  
	@ViewChild('city', null) 
	private elCity : ElementRef;

  constructor() { }

  ngOnInit() {
  }
	
	ngAfterViewInit() {
	   this.elName.nativeElement.style.backgroundColor = 'cyan';
	   this.elName.nativeElement.style.color = 'red';	   
	   this.elCity.nativeElement.style.backgroundColor = 'cyan';
	   this.elCity.nativeElement.style.color = 'red';	   	   
    }
}

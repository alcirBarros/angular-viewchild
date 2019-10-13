import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CpColorComponent } from './cp-color.component';

describe('CpColorComponent', () => {
  let component: CpColorComponent;
  let fixture: ComponentFixture<CpColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CpColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CpColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

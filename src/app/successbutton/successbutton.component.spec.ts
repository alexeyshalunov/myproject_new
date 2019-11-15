import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessbuttonComponent } from './successbutton.component';

describe('SuccessbuttonComponent', () => {
  let component: SuccessbuttonComponent;
  let fixture: ComponentFixture<SuccessbuttonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessbuttonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

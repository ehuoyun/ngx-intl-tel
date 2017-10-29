import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxIntlTelComponent } from './ngx-intl-tel.component';

describe('NgxIntlTelComponent', () => {
  let component: NgxIntlTelComponent;
  let fixture: ComponentFixture<NgxIntlTelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxIntlTelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxIntlTelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

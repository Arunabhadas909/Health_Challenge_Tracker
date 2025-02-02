import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Page1Component } from './page-1.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

describe('Page1Component', () => {
  let component: Page1Component;
  let fixture: ComponentFixture<Page1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Page1Component],
      imports:[FormsModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(Page1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

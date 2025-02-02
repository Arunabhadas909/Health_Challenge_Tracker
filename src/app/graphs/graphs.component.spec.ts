import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { GraphsComponent } from './graphs.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import {  MatTableModule } from '@angular/material/table';
import { MatTable } from '@angular/material/table';

describe('GraphsComponent', () => {
  let component: GraphsComponent;
  let fixture: ComponentFixture<GraphsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GraphsComponent,MatTable],
      imports:[MatCardModule,MatTableModule],
      schemas:[CUSTOM_ELEMENTS_SCHEMA],
    });
    fixture = TestBed.createComponent(GraphsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});



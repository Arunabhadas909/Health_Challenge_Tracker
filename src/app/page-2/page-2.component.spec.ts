// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { MatTableModule } from '@angular/material/table';
// import { Page2Component } from './page-2.component';
// import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import { FormsModule } from '@angular/forms';

// describe('Page2Component', () => {
//   let component: Page2Component;
//   let fixture: ComponentFixture<Page2Component>;

//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       declarations: [Page2Component],
//       imports:[FormsModule,MatTableModule],
//       schemas:[CUSTOM_ELEMENTS_SCHEMA],
//     });
//     fixture = TestBed.createComponent(Page2Component);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });






import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Page2Component } from './page-2.component';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatIconModule } from '@angular/material/icon';

describe('Page2Component', () => {
  let component: Page2Component;
  let fixture: ComponentFixture<Page2Component>;
  let userServiceSpy: jasmine.SpyObj<UserService>;
  let routerSpy: jasmine.SpyObj<Router>;

  beforeEach(async () => {
    userServiceSpy = jasmine.createSpyObj('UserService', ['createNewUser', 'GetAllUsers']);
    routerSpy = jasmine.createSpyObj('Router', ['navigate']);

    userServiceSpy.GetAllUsers.and.returnValue([]);

    await TestBed.configureTestingModule({
      declarations: [Page2Component],
      imports: [
        MatTableModule,
        MatPaginatorModule,
        MatSortModule,
        MatFormFieldModule,
        MatSelectModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule, // Add this module to fix the error
        FormsModule,
        BrowserAnimationsModule,
      ],
      providers: [
        { provide: UserService, useValue: userServiceSpy },
        { provide: Router, useValue: routerSpy }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Page2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add a new workout to the list', () => {
    component.newWorkout = 'Basketball';
    component.addWorkout();
    expect(component.workTypes.some(w => w.value === 'Basketball')).toBeTrue();
  });

  it('should call createNewUser on userService when onAdd1 is called', () => {
    component.nameInput = 'John Doe';
    component.workType = ['Running'];
    component.workoutTime = 30;
    component.onAdd1();
    expect(userServiceSpy.createNewUser).toHaveBeenCalledWith('John Doe', ['Running'], 1, 30);
  });

  it('should navigate to /graphs when navigateToPage is called', () => {
    component.navigateToPage();
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/graphs']);
  });

  it('should filter the table data based on search query', () => {
    component.searchQuery = 'John';
    component.applyFilter();
    expect(component.list_users.filter).toBe('john');
  });

  it('should sort data based on selected option', () => {
    component.list_users.data = [
      { name: 'Alice', workouts: ['Running','Cycling','Swimming'], NumberofWorkouts: 3, TotalWorkoutMinutes: 90 },
      { name: 'Bob', workouts: ['Cycling','Swimming'], NumberofWorkouts: 2, TotalWorkoutMinutes: 60 }
    ];
    component.selectedSort = 'name';
    component.applySort();
    expect(component.list_users.data[0].name).toBe('Alice');
  });
});





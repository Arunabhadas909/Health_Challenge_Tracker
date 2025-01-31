import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { MatTableDataSource } from '@angular/material/table';

import { User } from '../models/users';
import { MatSort } from '@angular/material/sort';

interface workoutType{
  value: string;
}



@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.css'],
  
})
export class Page2Component implements AfterViewInit {

  constructor(private userService:UserService){}

  @ViewChild(MatSort) sort!: MatSort;
  public nameInput:string ='';
  public workType:string[]=[''];
  public workoutTime:number=60;
  public newWorkout:string='';
  public isDisabled:boolean=true;

  workTypes:workoutType[] = [
    {value: 'Running'},{value: 'Cycling'},{value: 'Swimming'},{value:'yoga'},{value:'MMA'},{value:'Cricket'},{value:'Football'}
  ];

  onAdd1()
  {

   
   
    this.userService.createNewUser(this.nameInput,this.workType,this.workType.length,this.workoutTime);
    this.list_users.data = [...this.userService.GetAllUsers()];
    console.log(this.userService.users);
    
  }
addWorkout()
{
  this.isDisabled=false;
  this.workTypes.push({value:this.newWorkout}); 
    
  
  console.log(this.workTypes);
}

  list_users = new MatTableDataSource(this.userService.GetAllUsers());

  displayedColumns: string[] = ['name', 'workouts','NumberofWorkouts','TotalWorkoutMinutes'];


  searchQuery: string = '';
  selectedSort: keyof User = 'name';

  onSearch() {
    console.log('Searching for:', this.searchQuery);
  }

  clearSearch() {
    this.searchQuery = '';
    this.applyFilter();
  }

  

  ngAfterViewInit() {
    this.list_users.sort = this.sort;
  }


applyFilter() {
  this.list_users.filter = this.searchQuery.trim().toLowerCase();
}




sortOptions = [
  { value: 'name', viewValue: 'Name' },
  { value: 'workouts', viewValue: 'WorkoutType' },
  { value: 'NumberofWorkouts', viewValue: 'NumberofWorkouts' },
  { value: 'TotalWorkoutMinutes', viewValue: 'TotalWorkoutMinutes' }
];


applySort() {
  this.list_users.data = [...this.list_users.data].sort((a, b) => {
    if (a[this.selectedSort] < b[this.selectedSort]) return -1;
    if (a[this.selectedSort] > b[this.selectedSort]) return 1;
    return 0;
  });

}
}
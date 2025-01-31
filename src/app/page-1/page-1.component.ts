import { Component } from '@angular/core';
import { Router } from '@angular/router';



interface workoutType{
  value: string;
}

// interface Food {
//   value: string;
//   viewValue: string;
// }

@Component({
  selector: 'app-page-1',
  templateUrl: './page-1.component.html',
  styleUrls: ['./page-1.component.css'],


})
export class Page1Component {






  // public workMinutes:number =0;
  // public nameInput:string ='';
  // public workType:string[]=[''];


  constructor(private route: Router){}

  // public selectedWorkoutType: string = '';
  public nameInput:string ='John';
  public workoutType:string[]=['Running'];
  public workoutTime:number=60;

  workTypes:workoutType[] = [
    {value: 'Running'},{value: 'Cycling'},{value: 'Swimming'},{value:'yoga'},{value:'MMA'},{value:'Cricket'},{value:'Football'}
  ];

  onAdd()
  {

   
   
   
    this.route.navigate(['/page-2']);
  }


  

  // foods: Food[] = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'},
  // ];

}

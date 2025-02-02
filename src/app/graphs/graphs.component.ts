import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { UserService } from '../services/user.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent {

  constructor(private service:UserService){}
  public fullName= '';
  public workoutType = [''];
  public workoutQuantity= 0;
  public workoutTime= 0;


  
  // users: any[] = [];
  // users = [
  // //   { name: this.nameInput, data: [ {name: this.workoutType , value: this.workoutTime } ] },
  //   { name: 'John Doe', data: [{ name: 'Running', value: 20 }, { name: 'Cycling', value: 50 }] },
  //   { name: 'Mike Johnson', data: [{ name: 'Running', value: 35 }, { name: 'Cycling', value: 40 }] },
  //   // { name: this.fullName, data: [ {name: this.workoutType , value: this.workoutTime } ] },
  // ];
  //  userDetails = this.service.convertUsersToArray(this.service.users);
  userDetails = this.service.convertUsersToArray(this.service.users) ; 
   displayedColumns: string[] = ['name'];

  // selectedUser = this.userDetails[0];

  selectedUser = this.userDetails.length > 0 ? this.userDetails[0] : null;

  colorScheme: Color = {
    name: 'custom',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#42A5F5', '#1E88E5']
  };



  selectUser(user: any) {
    this.selectedUser = user;
  }

  // onInit()
  // {


  //   let newUser = { name: this.fullName, data: [ {name: this.workoutType , value: this.workoutTime } ] };
  //   this.users.push(newUser);

  // }



//   ngOnInit() {
//     // this.users = this.userDetails.filteredData.map(user => ({
//     //   name: user.name,
      
//     //   data: [
//     //     { name: user.workouts[0], value: user.TotalWorkoutMinutes || 0 },
//     //     { name: 'Cycling', value: user.TotalWorkoutMinutes || 0 },
//     //   ]
//     // }));

// }
}

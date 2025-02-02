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


  
 
  userDetails = this.service.convertUsersToArray(this.service.users) ; 
   displayedColumns: string[] = ['name'];


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

  
}

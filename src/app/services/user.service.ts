import { Injectable } from '@angular/core';
import { User } from '../models/users';
import { TitleCasePipe } from '@angular/common';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  users:User[] =
  [
    
    new User('John Doe',['running'], 1,110),

    new User('Superman',['Yoga'], 1,60),

    new User('DongMan',['Cycling'], 1,50)


];



GetAllUsers()
{

  return this.users;

}

createNewUser(name:string,workouts:string[],NumberofWorkouts:number,TotalWorkoutMinutes:number)
{

  let user = new User(name,workouts,NumberofWorkouts,TotalWorkoutMinutes);
  this.users.push(user);


}

// classToArray(parameter:User[],attribute:string|string[]|number)
// {
//   const result: (string | number | string[])[] = [];
//   for(let i=0;i<parameter.length; i++)
//     {
//    if(attribute=='name')
//     {
//       result.push( parameter[i].name);
//     }
//     else if(attribute=='workouts')
//       {
//         result.push(parameter[i].workouts);
//       }
//     else if( attribute == 'NumberofWorkouts')
//       {
//         result.push(parameter[i].NumberofWorkouts);
//       }
//     else if(attribute == 'TotalWorkoutMinutes')
//       {
//         result.push(parameter[i].TotalWorkoutMinutes);
//       }
//       return result;
// }
// }



private dataSource = new BehaviorSubject<string>('Initial Data');
currentData = this.dataSource.asObservable();

changeData(data: string) {
  this.dataSource.next(data);
}


 convertUsersToArray(users: User[]): any[] {
  return users.map(user => ({
    name: user.name,
    data: user.workouts.map(workout => ({
      name: workout,
      value: user.TotalWorkoutMinutes
    }))
  }));
}


}


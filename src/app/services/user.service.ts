import { Injectable } from '@angular/core';
import { User } from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  users:User[] =
  [
    
    new User('John Doe',['running','swimming'], 1,110),

    new User('Superman',['Yoga','Gym'], 1,60),

    new User('DongMan',['Cycling','running'], 1,50)


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
}
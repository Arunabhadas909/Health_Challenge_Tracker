export class User

{


constructor(name:string,workouts:string[],NumberofWorkouts:number,TotalWorkoutMinutes:number)
{

    this.name=name;
    this.workouts=workouts;
    this.NumberofWorkouts=NumberofWorkouts;
    this.TotalWorkoutMinutes=TotalWorkoutMinutes;

}
name:string;
workouts:string[];
NumberofWorkouts:number;
TotalWorkoutMinutes:number;



}
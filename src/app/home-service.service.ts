import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class HomeServiceService {
  students = [
    {id: 101, name: "Pranab", description: "Pranab is a state of failure  ", email:"pranab@abc.com"},
    {id: 102, name: "Alex", description: "Alex is a Student", email:"alex@abc.com"},
    {id: 103, name: "Angelina", description: "Angelina is a good Actress", email:"angelina@abc.com"},
    {id: 104, name: "Ronaldo", description: "Ronaldo is a Brazilian Player", email:"ronaldo@abc.com"}
  ]

  constructor() { }

  

  public getStudents() : Array< {id, name, description, email}>{
    return this.students;}

  public createStudents(students: { id, name, description, email}){
    this.students.push(students);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  constructor(private router: Router) { }

  ngOnInit(): void {
  
}
LogInStudent(){
  if (this.username == "admin@gmail.com" && this.password == "12345678"){
    this.router.navigateByUrl('home');
    console.log("Redirecting to the home Page");
  }

  else{
    alert("Wrong Input ! You are Not permited");
  }
}
}
 

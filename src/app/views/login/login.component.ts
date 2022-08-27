import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})



export class LoginComponent implements OnInit {
  

  
username : string ="";
password : string ="";
show: boolean= false;
submit(){

this.clear();
}
clear(){
this.username ="";
this.password = "";
this.show = true;
}

  
  constructor() { }

  ngOnInit(): void {
  }

}

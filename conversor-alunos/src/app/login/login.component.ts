import { Component, OnInit } from '@angular/core';
import { FormControlName, FormGroupName, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public email:any;
public senha:any;


constructor() { }

ngOnInit(): void {

}




fazerLogin(){
console.log("meu login")
console.log(this.email , "login")
console.log(this.senha , "senha")

}





}


import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService : UserService,
    private router : Router
  ){

  }

  ngOnInit(): void {

  }


  login(form:any){
    console.log(form.value);
    this.userService.login(form.value)
    .then(resp => {
      console.log(resp);
    })
    .catch(err => alert(err));

  }

  loginGoogle(){
    this.userService.loginGoole()
    .then( resp => {
      this.router.navigate(['/home']);
    })
    .catch(err => alert(err));
  }

}

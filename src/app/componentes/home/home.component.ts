import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router
  )
{}

ngOnInit(): void {

}


logout(){
this.userService.logout()
.then(()=>
{
this.router.navigate(['/registro']);
})
.catch(err => alert(err));
}

}

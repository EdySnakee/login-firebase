import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/modelos/usuario.model';
import { UserService } from 'src/app/servicios/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {

  constructor(
    private userService: UserService,
    private router: Router,

  ){}

  ngOnInit(): void {

  }



  registrar(form:any){

    this.userService.registro(form.value)
    .then(resp => {
      // console.log(resp);
      this.router.navigate(['/login']);
    })
    .catch(error => alert(error))

  }

}

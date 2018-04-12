import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  /**
  * Falta en el constructor una instancia del servicio que pueda manejar la base de datos del tipo de objeto 
  */
  constructor(private pf: FormBuilder ) {
  }

  ngOnInit() {
  }

}

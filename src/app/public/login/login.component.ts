import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, Validators, FormBuilder } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: any;

  constructor(private authService: AuthService, private router: Router){}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl("eve.holt@reqres.in", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(){
    const email = this.form.get('email').value;
    const password = this.form.get('password').value;
    this.authService.login(email, password)
      .subscribe({
        next: (data) => {
          console.log(data.token);

          if(data != null){
            this.router.navigate(["/dashboard"]);
          }
        } ,
        error: (e) => console.error("Login failed",e),
        complete: () => console.info('Success') 
      });
  }

}

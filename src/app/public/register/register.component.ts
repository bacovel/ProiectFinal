import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormGroup, FormControl, FormsModule, Validators } from '@angular/forms';

type response = {
  id:number;
  token:string
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit{

  constructor(private http: HttpClient){}

  form: any;
  ngOnInit(): void {
    this.form = new FormGroup({
      firstName: new FormControl("", [Validators.required]),
      lastName: new FormControl("", Validators.required),
      email: new FormControl("eve.holt@reqres.in", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(8)])
    });
  }

  onSubmit(): void{

    if(this.form.valid){
      this.http.post<response>("https://reqres.in/api/register", {
        email: this.form.controls["email"].value,
        password: this.form.controls["password"].value
      }).subscribe({
        next:(data:response)=> {
          alert(`${data.id} -> ${data.token}`);
        },
        error: (err)=>{
          console.log(err);
        }
      })
    }
    console.log(this.form.value);
  }


}

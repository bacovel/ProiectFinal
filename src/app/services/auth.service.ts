import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoged: boolean = false;
  private loginUrl: string = "https://reqres.in/api/login"

  login(email: string, password: string): Observable<any>{
    return this.http.post<any>(this.loginUrl, {email, password}).pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return user;
    }));
  }

  logout(){
    localStorage.removeItem('currentUser');
  }

  isLoggedIn(){
    return !!localStorage.getItem('currentUser');
  }
}

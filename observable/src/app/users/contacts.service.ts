import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

interface User {
  name: string,
  email: string,
  id: number
}

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<object>{
    return this.http.get('https://jsonplaceholder.cypress.io/users');
  }

  viewUser(): Observable<User>{
    return this.http.get<User>('https://jsonplaceholder.cypress.io/users/1');
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../Modals/api-modals';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceService {
  
  apiUrl = 'https://reqres.in/api/';
  apiAvatar = 'https://reqres.in/img/faces/';

  constructor(private _http: HttpClient) {}

  private headers = new HttpHeaders({ 'x-api-key': environment.reqres.apiKey });
  // Get all users
  getUserList(): Observable<any> {
    return this._http.get<any>(`${this.apiUrl}users`, { headers: this.headers });
  }

  getUserById(id: number): Observable<user> {
    return this._http.get<user>(`${this.apiUrl}users/${id}`, { headers: this.headers });
  }

  // Avatar of user
  AvatarUser(id: number): Observable<any> {
    return this._http.get<any>(`${this.apiAvatar}${id}-image.jpg`, { headers: this.headers });
  }

  // Delete user
  deleteUser(id: number): Observable<any> {
    return this._http.delete(`${this.apiUrl}users/${id}`, { headers: this.headers });
  }

  // Create a new user
  addUser(user: any) {
    return this._http.post(`${this.apiUrl}users`, user);
  }

  // Update user details
  updateUser(id: number, user: any) {
    return this._http.put(`${this.apiUrl}users/${id}`, user);
  }
}

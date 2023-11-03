import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../Environment/environment';
@Injectable({
 providedIn: 'root',
})
export class ApiService {
 constructor(private http: HttpClient) {}

 // GET
 public getAllData() {
  const path: string = '/posts/';
  return this.http.get<any>(`${environment.API}${path}`);
 }

 public getDataById(id: any) {
  const path: string = '/posts/';
  return this.http.get<any>(`${environment.API}${path}${id}`);
 }

 // POST

 public postData(formData: any) {
  const path: string = '/posts';
  return this.http.post<any>(`${environment.API}${path}`, formData);
 }

 // UPDATE

 public putData(data: any) {
  const path: string = '/posts/'; 
  return this.http.put(`${environment.API}${path}${data.id}`, data);
 }

 // DELETE

 public deleteData(id: any) {
  const path: string = '/posts/';
  return this.http.delete(`${environment.API}${path}${id}`);
 }


}

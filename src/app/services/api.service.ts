import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { environment } from '../Environment/environment';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  public getData ()  {
    const path: string = '/posts/';
    return this.http.get(`${environment.API}${path}`);
  }

  public getDataById (id:any) {
    const path: string = '/posts/';
    return this.http.get(`${environment.API}${path}${id}`);
  }

  public addData (obj :any) {
     const path: string = '/posts/';
     return this.http.post(`${environment.API}${path}`, obj);
  }

  
  public deleteData(id :any) {
    const path: string = '/posts/';
    return this.http.delete(`${environment.API}${path}${id}`);
  }

  public updateData(data: any) {
    console.log(data);
    const path: string = '/posts/';
    return this.http.put(`${environment.API}${path}${data.id}`, data);
  }
}

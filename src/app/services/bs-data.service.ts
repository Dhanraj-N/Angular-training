import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BsDataService {

  public dataBSubject = new BehaviorSubject<String>('');

  public dataSubject = new Subject<string>();

  constructor() { }

}

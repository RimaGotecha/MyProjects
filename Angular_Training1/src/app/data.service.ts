import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs';

@Injectable()
export class DataService {
 data= [];
 public subject = new Subject<any>();
  constructor() {
    this.data.push(
      {
      firstName: 'sravan',
      lastName: 'Rayarapu',
      email: 'admin@eezeeorder.com',
      phone: '+61 0434567890'
      });
      this.subject.next(this.data);
    }

  AddData(object: any) {
    this.data.push(object);
    this.subject.next(this.data);
  }

  getData(): Observable<Array<any>> {
    return of(this.data);
  }
}

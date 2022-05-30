import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  private dataSource: BehaviorSubject<string> = new BehaviorSubject<string>(
    'Initial Value'
  );
  data: Observable<string> = this.dataSource.asObservable();
  
  constructor() {}

  sendData(title: string) {
    this.dataSource.next(title);
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyhttpcallerService {
  constructor(private http: HttpClient) {}

  doGet(): Observable<MyResult[]> {
    // this.http.get<{id:number; name:string}[]>('');
    return this.http.get<MyResult[]>(
      'http://localhost:9999/tests/simple'
    );
  }
}

export class MyResult {
    name?:String;
    id?:number;
}
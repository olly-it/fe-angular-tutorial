import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MyhttpcallerService {
  constructor(private http: HttpClient) {}

  doGet(): Observable<Object | null> {
    return this.http.get<{ name: string; id: number }[]>(
      'http://localhost:9999/tests/simple'
    );
  }
}

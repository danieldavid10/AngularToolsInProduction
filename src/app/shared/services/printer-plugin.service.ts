import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrinterPluginService {

  constructor(private http: HttpClient) { }

  getPrintersInstalled(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8000/impresoras`);
  }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PrinterPluginService {

  constructor(private http: HttpClient) { }

  getPrintersInstalled(): Observable<string[]> {
    return this.http.get<string[]>(`http://localhost:8000/impresoras`);
  }

  getPrintDocument(urlFile: string, printerName: string): Observable<any> {
    let params = new HttpParams();
    params = params.append('urlPdf', urlFile);
    params = params.append('impresora', printerName);
    return this.http.get<any>(`http://localhost:8080/url`, { params });
  }

}

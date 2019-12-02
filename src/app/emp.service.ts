import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpService {
url='http://172.18.5.168:9898/emp'
  constructor(private http: HttpClient) { }

  getemp()
  {
    return this.http.get(this.url);
  }
}

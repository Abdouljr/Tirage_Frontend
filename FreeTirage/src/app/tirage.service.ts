import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }

  getPostulants() :Observable<Object>{
    return this.http.get<Object>("http://localhost:8080/Postulant/list")
}

//   deletePostulantById(id: number) :Observable<Object[] | undefined> {
//      return this.http.get<object>(`http://localhost:8080/delete/${id}`);
    
// }
}

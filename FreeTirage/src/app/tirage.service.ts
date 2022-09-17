import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient ) { }


  getPostulants(id_list:Number) :Observable<Object>{
    return this.http.get(`http://localhost:8080/Postulant/liste/${id_list}`);
}

getTirages() : Observable<object> {
  return this.http.get<object>("http://localhost:8080/tirage/list");
}

getPostulantsTries() : Observable<object> {
  return this.http.get("http://localhost:8080/tirage/list")
}

}
//   deletePostulantById(id: number) :Observable<Object[] | undefined> {
//      return this.http.get<object>(`http://localhost:8080/delete/${id}`);
    
// }


import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient ) { }


  getPostulantParListe(id :Number) :Observable<Object>{
    return this.http.get(`http://localhost:8080/Postulant/liste/${id}`);
}

getTirages(libelle: string) : Observable<object> {
  return this.http.get<object>(`http://localhost:8080/tirage/liste/${libelle}`);
}
getToutTirages() : Observable<object> {
  return this.http.get<object>(`http://localhost:8080/tirage/list`);
}

getPostulantsTries(id: number) : Observable<object> {
  return this.http.get(`http://localhost:8080/tirage/postulants/${id}`)
}

}
//   deletePostulantById(id: number) :Observable<Object[] | undefined> {
//      return this.http.get<object>(`http://localhost:8080/delete/${id}`);
    
// }


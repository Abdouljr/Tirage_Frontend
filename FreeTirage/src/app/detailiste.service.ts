import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetailisteService {
  apiUrl='http://localhost:8080'
  constructor(private http:HttpClient) { }

  getDetailListe(id_list:number):Observable<Object>{

    return this.http.get<Object>(`${this.apiUrl}/tirage/recupererTirageParIdlidte/${id_list}`)
  }
  
}

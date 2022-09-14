import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewTirage } from './newtirage';

@Injectable({
  providedIn: 'root'
})
export class RequeteserviceService {
  apiUrl='http://localhost:8080'
  constructor(private http:HttpClient) { }
//requetes pour faire un tirage en important une liste
  addtirage(libelle_tirage:string,nbredepostulants:number,libelle:string,file:any): Observable<void>{
    
   let l=new FormData();
   l.append("file",file)
    return this.http.post<void>(`${this.apiUrl}/tirage/add/${libelle_tirage}/${nbredepostulants}/${libelle}`,l);
  }
  

//requetes pour faire un tirage en selectioonnant  une liste
    addtiragewithliste(libelle_tirage:string,libelle:string,nbredepostulants:number): Observable<void>{
  
      return this.http.post<void>(`${this.apiUrl}/tirage/${libelle_tirage}/${nbredepostulants}/${libelle}`,null)
    }


  
//requetes pour importer une liste
  addliste(libelle:string,file:any):Observable<void>{

    let data=new FormData();

    data.append("file",file)
    return this.http.post<void>(`${this.apiUrl}/liste/add/${libelle}`,data);

  }

//methodes pour afficher toutes tes listes enregistrées
  getListes():Observable<Object>{
    return this.http.get(`${this.apiUrl}/liste/list`);
  }

  getUsers() {
     
    let list = [];
 
    for (let index = 0; index < 100; index++) { 
      list.push({num : "", nomliste :"", nbredetirage: " ", dateimport:"", action:""});
    }
    return list;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewTirage } from './newtirage';
import { Postulants } from './postulants';

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
//recuperer les post par idlist
  getPostulants(id_list:number):Observable<Postulants[]>{

   return this.http.get<Postulants[]> (`${this.apiUrl}/Postulant/list/${id_list}`);
  }
//
getNombreTirageParListe(id_list:number):Observable<any>{

  return this.http.get(`${this.apiUrl}/tirage/findtirage/${id_list}`)
}

  getTirageParListe(id_list:number):Observable<any>{

    return this.http.get(`${this.apiUrl}/tirage/recupererTirageParIdlidte/${id_list}`)
  }


}

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

//recuperer le nombre de t sur chaque liste
getNombreTirageParListe():Observable<any>{

  return this.http.get(`${this.apiUrl}/tirage/findnbretirage`)
}
// l'ensemble des tirages dans la bdd
getNombreTirageTotal():Observable<any>{

  return this.http.get(`${this.apiUrl}/tirage/findnbretiragetotal`)
}

//afficher les tirages tout les tirages d'une liste
  getTirageParListe(id_list:number):Observable<any>{

    return this.http.get(`${this.apiUrl}/tirage/liste/${id_list}`)
  }

  //afficher les tirages tout les tirages d'une liste
  getNbreTirageParListe(id_list:number):Observable<any>{

    return this.http.get(`${this.apiUrl}/tirage/listetaille/${id_list}`)
  }

//postulants triés d'un tiraga
  getPostulantsTries(id: number) : Observable<object> {
    return this.http.get(`http://localhost:8080/tirage/findposttires/${id}`)
  }
  

}

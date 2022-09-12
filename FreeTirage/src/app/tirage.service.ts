import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TirageService {

  constructor(private http: HttpClient) { }

  getPostulants(): Observable<Object[]>{
    return this.http.get<Object[]>('http://localhost:8080/Postulant/list').pipe(
      tap((postulants) => console.table(postulants)),
      catchError((error) => {
        console.log(error)
        return of([]);
      })
    )
}

  deletePostulantById(id: number) :Observable<Object[] | undefined> {
    return this.http.get<object[]>(`http://localhost:8080/delete/${id}`).pipe(
      tap((postulant) => console.table(postulant)),
      catchError((erreur) => {console.log(erreur);
      return of(undefined);
      })
    )
}
}

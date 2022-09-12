import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { TirageService } from '../tirage.service';
import { Personne } from './Personnes';

@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.css']
})
export class DetailListeComponent implements OnInit {
  personnes: Observable<Object[]>;
  nombre: number;
  constructor(private tirageService: TirageService) { }

  ngOnInit() {
    this.personnes = this.tirageService.getPostulants();
}

}

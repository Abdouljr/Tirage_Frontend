import { Component, OnInit } from '@angular/core';
import { Personne } from '../detail-liste/Personnes';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})
export class DetailTirageComponent implements OnInit {
  personnes: any;
  nombre: number;
  constructor(private tirageService: TirageService) { }

  ngOnInit() {
    this.personnes = this.tirageService.getPostulants(); 
    this.nombre = this.personnes.length;
  }

}

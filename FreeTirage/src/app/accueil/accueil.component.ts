import { Component, OnInit } from '@angular/core';
import { RequeteserviceService } from '../requeteservice.service';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  liste:any;
  postulants: any;
  tirages: any;
  nb_tous_tirages: number = 0;
  nb_tirages: any;
  nb_tirage: number = 0;
  constructor(
    private service:RequeteserviceService,
      private tirageService: TirageService,
      ) { }

  ngOnInit(): void {
      this.getlist();
      this.tirageService.getToutTirages().subscribe(data => {
        this.tirages = data
        for (const t of this.tirages) {
          this.nb_tous_tirages += 1;
        }
        console.table(this.nb_tous_tirages);
      })
  }

  
  getlist(){
    this.service.getListes().subscribe(
      response => {
        this.liste = response;
        
      }
    );
  }

};




import { Component, OnInit } from '@angular/core';

import { Liste } from '../liste';
import { MesListes } from '../meslistes';
import { RequeteserviceService } from '../requeteservice.service';
import {NgbPaginationModule, NgbAlertModule} from '@ng-bootstrap/ng-bootstrap';
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
  nb_tirage: any;
  listsdetails:any;
  constructor(
    private service:RequeteserviceService,
      private tirageService: TirageService,
      ) { }


  ngOnInit(): void {

      this.getlist();
      this.getNombreTirage();
      this.getnbretiragetotal();
     
      this.tirageService.getToutTirages().subscribe(data => {
        this.tirages = data
        // for (const t of this.tirages) {
        //   this.nb_tous_tirages += 1;
        // }
        // console.table(this.nb_tous_tirages);
      })
     
  }
  





  getlist(){
    this.service.getListes().subscribe(
      response => {
        this.liste = response;
<<<<<<< HEAD
        
=======
      //   for (const l of this.liste) {
      //     this.tirageService.getTirages(l.libelle).subscribe(donnee_tirage => {
      //       this.nb_tirages = donnee_tirage;
            
      //       console.log("+++++++++" + console.table(this.nb_tirages))
      //       for (const t of this.nb_tirages) {
      //         this.nb_tirage += 1;
      //       }

      //       console.log("=======" + console.table( this.tirages));
      //     }) 
      // }
>>>>>>> ec54488f53af2c0dd46fef27e9238b41dc4de797
      }
    );
  }

<<<<<<< HEAD
};

=======

//recuperer le nombre de tirage sur une liste

getNombreTirage(){
  this.service.getNombreTirageParListe().subscribe(tirr=>{
    console.log(tirr)
    this.listsdetails=tirr;
    console.log("mesdetails"+this.listsdetails[0][0])
  })
}
getnbretiragetotal(){
  this.service.getNombreTirageTotal().subscribe(
    t=>{
        this.nb_tirage=t;
        console.log("mestirages" + t);
    }
  )
}

getTirageParListe(id_list:number){
  var taille=[];
  return this.service.getNbreTirageParListe(id_list).subscribe(response=>{
    console.log(response)
    taille=response;
    return taille.length;
  })

  //return taille.length
  
 }





 
}
>>>>>>> ec54488f53af2c0dd46fef27e9238b41dc4de797



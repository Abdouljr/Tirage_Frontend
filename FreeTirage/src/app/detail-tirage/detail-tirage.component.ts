import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NewTirage } from '../newtirage';
import { PostulantsTries } from '../postulantsTries';
import { RequeteserviceService } from '../requeteservice.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})
export class DetailTirageComponent implements OnInit {
  postulantsTries: any;
  tirages: NewTirage;
  nombre: number = 0;
  ptriees:PostulantsTries;

  constructor(private request: RequeteserviceService, private route: ActivatedRoute) { }

  ngOnInit() {
     
      const id=this.route.snapshot.params['id']
      this.getposttirees(id)
      console.log(id);

      // if(listeId){
      //   this.tirageService.getPostulants().subscribe(data => {
      //   this.postulants = data
      // } )
      // }

      // if(listeId){
      //   this.tirageService.getPostulantsTries(id).subscribe(data => {
      //     this.postulantsTries = data
      //     console.table(this.postulantsTries)
      //     // for (const p of this.postulantsTries) {
      //     //   this.nombre +=1
      //     // }
      //     } )
      // }
    }

    getposttirees(id_tirage:number){
      this.request.getPostulantsTries(id_tirage).subscribe(data=>{
        this.postulantsTries=data
        console.log(data);
      })
    }
    
    


  }
    //   this.tirageService.getTirages().subscribe(donnee_tirage => {
    //     this.tirages = donnee_tirage 
    // })




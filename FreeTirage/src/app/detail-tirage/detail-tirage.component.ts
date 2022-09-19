import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})
export class DetailTirageComponent implements OnInit {
  postulantsTries: any;
  tirages: any;
  nombre: number = 0;

  constructor(private tirageService: TirageService, private route: ActivatedRoute) { }

  ngOnInit() {
      const listeId: string | null = this.route.snapshot.paramMap.get('id');
      
      // if(listeId){
      //   this.tirageService.getPostulants().subscribe(data => {
      //   this.postulants = data
      // } )
      // }

      if(listeId){
        this.tirageService.getPostulantsTries(+listeId).subscribe(data => {
          this.postulantsTries = data
          console.table(this.postulantsTries)
          for (const p of this.postulantsTries) {
            this.nombre +=1
          }
          } )
      }
    }
    


  }
    //   this.tirageService.getTirages().subscribe(donnee_tirage => {
    //     this.tirages = donnee_tirage 
    // })




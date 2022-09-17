import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Liste } from '../liste';
import { TirageService } from '../tirage.service';

@Component({
  selector: 'app-detail-tirage',
  templateUrl: './detail-tirage.component.html',
  styleUrls: ['./detail-tirage.component.css']
})
export class DetailTirageComponent implements OnInit {
  postulants: any;
  tirages: any;
  nombre: number = 10;
  liste:Liste;
  constructor(private tirageService: TirageService, private route: ActivatedRoute) { }

  ngOnInit() {
      //const listeId: string | null = this.route.snapshot.paramMap.get('id');
      
      // if(listeId){
      //   this.tirageService.getPostulants().subscribe(data => {
      //   this.postulants = data
      // } )
      // }

        this.tirageService.getPostulants(this.liste.id_list).subscribe(data => {
        this.postulants = data
        } )

      this.tirageService.getTirages().subscribe(donnee_tirage => {
        this.tirages = donnee_tirage 
    })


  }

}

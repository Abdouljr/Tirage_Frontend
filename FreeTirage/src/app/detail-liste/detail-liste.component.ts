import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Liste } from '../liste';
import { RequeteserviceService } from '../requeteservice.service';
import { TirageService } from '../tirage.service';
@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.css']
})
export class DetailListeComponent {
  postulants: any;
  liste: any;
  listes: any;
  nombre: number = 0;
  tirages: any;
  constructor(private tirageService: TirageService,
     private route: ActivatedRoute,
     private service: RequeteserviceService,
     private router: Router) { }

  ngOnInit() :void{
      const listeId: string | null = this. route.snapshot.paramMap.get('id');
      if(listeId){
        this.tirageService.getPostulantParListe(+listeId).subscribe(data => {
        this.postulants = data
        for (const n of this.postulants) {
            this.nombre += 1;
        }
        });
      }

      this.service.getListes().subscribe(
        response => {
          this.listes = response;
          for (const l of this.listes) {
              if(l.id_list == listeId){
                this.liste = l;
              }
          }
          this.tirageService.getTirages(this.liste.libelle).subscribe(donnee_tirage => {
            this.tirages = donnee_tirage;
            console.table(this.tirages);
          }) 
        });

    }

    vaSurDetailt(){
      this.router.navigate(['/detailt']);
    }
}

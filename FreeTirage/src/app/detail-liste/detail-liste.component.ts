import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Tirage } from 'src/tirage';
import { DetailisteService } from '../detailiste.service';
import { Liste } from '../liste';
import { Postulants } from '../postulants';
import { RequeteserviceService } from '../requeteservice.service';
import { TirageService } from '../tirage.service';
@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.css']
})
export class DetailListeComponent {
 
  
  listes: any;
  nombre: number;


  liste: Liste;
  postulants: Postulants[];
 
  tirages: any;

  detailslistes$:any;

  constructor(private tirageService: TirageService,
     private route: ActivatedRoute,
     private service: RequeteserviceService,

     private router: Router) { }

<<<<<<< HEAD
  ngOnInit() :void{
    this.initialiser()

    }

    initialiser(){
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

    supprimer(id: number){
      this.tirageService.deleteTirage(id);
      this.initialiser();

    }
=======
     ngOnInit() :void{
      const id=this.route.snapshot.params['id']
      this.getpostulants(id);
      this.getTirageParListe(id);
      

      this.service.getListes().subscribe(data => {
        this.listes = data;
        
        for (const n of this.listes){
          if(n.id_list == id){
            this.liste = n;
          }

        }
        // this.tirageService.getTirages(this.liste.libelle).subscribe(donnees_tirages => {
        //   this.tirages = donnees_tirages;
        // })
      })




      // this.route.params.subscribe(
      //   (data)=>{
      //     console.log(data)
      //   }
      // )
      
     }
     //////////fin ngOninit
     private getpostulants(id:number){
      this.service.getPostulants(id).subscribe(data=>{
        console.log(data)
        this.liste=data[0].listImport
        this.postulants=data;
        console.log(this.postulants[0].listImport)

      })  
     }
//recuperer les tirages d'une liste
     getTirageParListe(id_list:number){
      this.service.getTirageParListe(id_list).subscribe(response=>{
        console.log(response)
        this.tirages=response;
      })
     }

>>>>>>> ec54488f53af2c0dd46fef27e9238b41dc4de797
}


     
   

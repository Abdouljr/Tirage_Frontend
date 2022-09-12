import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TirageService } from '../tirage.service';
@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.css']
})
export class DetailListeComponent implements OnInit {
  postulants: any;
  nombre: number = 4;
  constructor(private tirageService: TirageService, private route: ActivatedRoute) { }

  ngOnInit() :void{
      const listeId: string | null = this. route.snapshot.paramMap.get('id');
      if(listeId){
        this.tirageService.getPostulants(+listeId).subscribe(data => {
        this.postulants = data
      });
      }
}

}

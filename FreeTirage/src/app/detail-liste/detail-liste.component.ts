import { Component, OnInit } from '@angular/core';
import { TirageService } from '../tirage.service';
@Component({
  selector: 'app-detail-liste',
  templateUrl: './detail-liste.component.html',
  styleUrls: ['./detail-liste.component.css']
})
export class DetailListeComponent implements OnInit {
  personnes: any;
  nombre: number = 4;
  constructor(private tirageService: TirageService) { }

  ngOnInit() :void{
       this.tirageService.getPostulants().subscribe(data => {
       this.personnes = data
     })
}

}

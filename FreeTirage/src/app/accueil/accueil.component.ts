import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Liste } from '../liste';
import { RequeteserviceService } from '../requeteservice.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
  liste:any;
  constructor(private service:RequeteserviceService) { }

  ngOnInit(): void {
      this.getlist();
  }

  
  getlist(){
    this.service.getListes().subscribe(
      response => {
        console.log(response);
        this.liste = response;
      }
    );
  }


}

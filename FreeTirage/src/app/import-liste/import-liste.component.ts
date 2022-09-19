import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Liste } from '../liste';
import { RequeteserviceService } from '../requeteservice.service';

@Component({
  selector: 'app-import-liste',
  templateUrl: './import-liste.component.html',
  styleUrls: ['./import-liste.component.css']
})
export class ImportListeComponent implements OnInit {
  
  formmodule:FormGroup;
  liste:Liste;

  file:any;

  constructor(private request:RequeteserviceService, private formB:FormBuilder, private http:HttpClient) { }

  ngOnInit(): void {
this.formmodule=this.formB.group({
      libelle:['',Validators.required],
      dateimport:['',Validators.required],
      file:['',Validators.required],
    })

  }

  //quelquesoitla donnée recue de file on le transformr en fichier files
  //methode appeler lorsqu'on importe un fichier
  fileChange(e:any){
    this.file=e.target["files"][0]
  }
  /////////////////////////
  importerliste(){
    this.liste = this.formmodule.value
    this.request.addliste(this.liste.libelle, this.file).subscribe(
      data =>{
        this.formmodule.reset()
      
      }
    )
  }
  
  
 
}

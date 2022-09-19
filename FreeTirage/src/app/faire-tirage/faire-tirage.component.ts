import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Liste } from '../liste';
import { NewTirage } from '../newtirage';
import { RequeteserviceService } from '../requeteservice.service';

@Component({
  selector: 'app-faire-tirage',
  templateUrl: './faire-tirage.component.html',
  styleUrls: ['./faire-tirage.component.css']
})
export class FaireTirageComponent implements OnInit {
  
  options: FormGroup;
  options2:FormGroup;
  newtirage:NewTirage;
  liste:Liste;
  file:any;
  meslistes:any;
  
  constructor(  private formB:FormBuilder,private htpp:HttpClient ,private request:RequeteserviceService) { }
   
    //pour connecter le formulaire cette instance on utilise ng model dans nos input= instance .attribute de formsmodule
  ngOnInit(): void {
    this.options=this.formB.group({
      libelle_tirage:['',Validators.required],
      nbredepostulants:['',Validators.required],
      libelle:['',Validators.required],
      file:['',Validators.required],
    }),

    this.options2=this.formB.group({
      libelle_tirage:['',Validators.required],
      nbredepostulants:['',Validators.required],
      libelle:['',Validators.required],

    }),

    this.request.getListes().subscribe(
      data=>{
        this.meslistes=data;
      }
    )
  }

  ajoutiragewithliste(){
    this.newtirage= this.options2.value;
    this.request.addtiragewithliste(this.newtirage.libelle_tirage,this.newtirage.libelle,this.newtirage.nbredepostulants).subscribe(
      data=>{
            this.options2.reset();
      }
    )
  }


  fileChange(e:any){
    this.file=e.target["files"][0]
  }



  ajoutTirage(){
    this.newtirage = this.options.value
    this.request.addtirage(this.newtirage.libelle_tirage,this.newtirage.nbredepostulants,this.newtirage.libelle,this.file).subscribe(
      data =>{
        this.options.reset();
      }
    )
  }  
 
}

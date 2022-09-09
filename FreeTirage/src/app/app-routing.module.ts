import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaireTirageComponent } from './faire-tirage/faire-tirage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
 
//creer une route pour d'un composant vers un autreici

const routes: Routes = [
   //lorsqun chemin nest pas defini => rediriger vers /mes declaratioins
  {
    path:"",
    redirectTo:'/tirage',
    pathMatch:'full'
  },
  //lorsqu'on ecrit dans l'url "dliste"   => DetailListeComponent s'execute
  {path:"tirage",component:FaireTirageComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"detaill",component:DetailListeComponent},
  {path:"detailt",component:DetailTirageComponent},
  
  
];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaireTirageComponent } from './faire-tirage/faire-tirage.component';
import { AccueilComponent } from './accueil/accueil.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
import { ImportListeComponent } from './import-liste/import-liste.component';
import { PageNotFondComponent } from './page-not-fond/page-not-fond.component';
 
//creer une route pour d'un composant vers un autreici

const routes: Routes = [
   //lorsqun chemin nest pas defini => rediriger vers /mes declaratioins
  {
    path:"",
    redirectTo:'/import',
    pathMatch:'full'
  },
  //lorsqu'on ecrit dans l'url "dliste"   => DetailListeComponent s'execute
  {path:"tirage",component:FaireTirageComponent},
  {path:"accueil",component:AccueilComponent},
  {path:"detaill/:id",component:DetailListeComponent},
  {path:"detailt/:id",component:DetailTirageComponent},
  {path:"import",component:ImportListeComponent},
  {path:"**",component:PageNotFondComponent}

];







@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

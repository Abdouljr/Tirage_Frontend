import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './accueil/accueil.component';
import { FaireTirageComponent } from './faire-tirage/faire-tirage.component';
import { DetailListeComponent } from './detail-liste/detail-liste.component';
import { DetailTirageComponent } from './detail-tirage/detail-tirage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportListeComponent } from './import-liste/import-liste.component';
<<<<<<< HEAD
import { PageNotFondComponent } from './page-not-fond/page-not-fond.component';
=======
import { NgbAlertModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


>>>>>>> ec54488f53af2c0dd46fef27e9238b41dc4de797

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    FaireTirageComponent,
    DetailListeComponent,
    DetailTirageComponent,
    ImportListeComponent,
<<<<<<< HEAD
    PageNotFondComponent
=======
    

>>>>>>> ec54488f53af2c0dd46fef27e9238b41dc4de797
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

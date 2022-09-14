import { Component, OnInit } from '@angular/core';
import { MesListes } from '../meslistes';
import { RequeteserviceService } from '../requeteservice.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  public meslistes: Array<MesListes> = [];
  pageSize: 5;
  page: number;
  constructor( private request:RequeteserviceService) { }

  ngOnInit(): void {
    this.meslistes = this.request.getUsers();
  }

}

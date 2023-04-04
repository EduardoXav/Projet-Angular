import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
import { RapportsService } from '../rapports.service';
import { rapport } from '../models/rapport';

@Component({
  selector: 'app-list-rapport',
  templateUrl: './list-rapport.component.html',
  styleUrls: ['./list-rapport.component.scss']
})
export class ListRapportComponent implements OnInit{
  
  listRapport!: rapport[];

  constructor(private myRapportsService: RapportsService) { }

  ngOnInit(): void {
    this.listRapport = this.myRapportsService.getRapports();
  }

}

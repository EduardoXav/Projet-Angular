import { Component, OnInit } from '@angular/core';
import { RapportsService } from '../services/rapports.service';
import { rapport } from '../models/rapport';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-rapport',
  templateUrl: './list-rapport.component.html',
  styleUrls: ['./list-rapport.component.scss']
})
export class ListRapportComponent implements OnInit{
  
  listRapport$!: Observable<rapport[]>;

  constructor(private myRapportsService: RapportsService) { }

  ngOnInit(): void {
    this.listRapport$ = this.myRapportsService.getAllRapports();
  }

}

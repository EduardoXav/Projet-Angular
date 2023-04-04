import { Component,Input,OnInit } from '@angular/core';
import { rapport } from '../models/rapport';
import { RapportsService } from '../services/rapports.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rapport',
  templateUrl: './rapport.component.html',
  styleUrls: ['./rapport.component.scss']
})
export class RapportComponent implements OnInit{

  @Input() rapport!: rapport;
  theRapport!: rapport;

  constructor(private rapportService: RapportsService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    const idrapport = this.route.snapshot.params['id'];
    if(idrapport !== undefined){
      this.theRapport = this.rapportService.getRapportsById(+idrapport);
    }else{
      this.theRapport = this.rapport;
    }
  }

}

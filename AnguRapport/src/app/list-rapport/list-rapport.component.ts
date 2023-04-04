import { Component, OnInit } from '@angular/core';
//import { Observable } from 'rxjs';
//import { RapportService } from '../services/rapport.service';
import { rapport } from '../models/rapport';

@Component({
  selector: 'app-list-rapport',
  templateUrl: './list-rapport.component.html',
  styleUrls: ['./list-rapport.component.scss']
})
export class ListRapportComponent implements OnInit{
  
  listRapport!: rapport[];

  ngOnInit(): void {
    this.listRapport = [
      {
        id: 1,
        nomTechnicien: 'Jean',
        nomClient: 'Paul',
        adresseClient: 'Rue de la Paix',
        marqueModeleChaudiere: 'Chaudière à gaz',
        dateMiseEnService: new Date(),
        dateIntervention: new Date(),
        numeroSerie: '123456789',
        descriptionIntervention: 'Changement de pièces',
        tempsPasse: 2
      },
      {
        id: 2,
        nomTechnicien: 'Jean',
        nomClient: 'Pierre',
        adresseClient: 'Rue de la Guerre',
        marqueModeleChaudiere: 'Chaudière au fioul',
        dateMiseEnService: new Date(),
        dateIntervention: new Date(),
        numeroSerie: '987654321',
        descriptionIntervention: 'Changement de pièces',
        tempsPasse: 1
      },
      {
        id: 3,
        nomTechnicien: 'Anne',
        nomClient: 'Antoine',
        adresseClient: 'Rue de la neutralité',
        marqueModeleChaudiere: 'Chaudière à l\'électricité',
        dateMiseEnService: new Date(),
        dateIntervention: new Date(),
        numeroSerie: '1234589',
        descriptionIntervention: 'mise en service',
        tempsPasse: 0.5
      }
    ]

  }

}

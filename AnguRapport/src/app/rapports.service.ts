import { Injectable } from '@angular/core';
import { rapport } from './models/rapport';

@Injectable({
  providedIn: 'root'
})
export class RapportsService {

  constructor() { }

  getRapports(): rapport[] {

    return [
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
    ];
  }
}

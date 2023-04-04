import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { rapport } from '../models/rapport';
import { Observable, map, pipe } from 'rxjs';


@Component({
  selector: 'app-new-rapport',
  templateUrl: './new-rapport.component.html',
  styleUrls: ['./new-rapport.component.scss']
})
export class NewRapportComponent implements OnInit {
  currentRapport$!: Observable<rapport>;

  formulaire!: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.formulaire = this.formBuilder.group({
      nomTechnicien: [null,[Validators.required, Validators.minLength(3)]],
      nomClient: [null,[Validators.required, Validators.minLength(3)]],
      adresseClient: [null,[Validators.required, Validators.minLength(3)]],
      marqueModeleChaudiere: [null, [Validators.required, Validators.minLength(3)]],
      dateMiseEnService: [null, [Validators.required, Validators.minLength(3)]],
      dateIntervention: [null, [Validators.required, Validators.minLength(3)]],
      numeroSerie: [null, [Validators.required, Validators.minLength(1)]],
      descriptionIntervention: [null, [Validators.required, Validators.minLength(3)]],
      tempsPasse: [null, [Validators.required, Validators.minLength(1)]]
    }
    ,{updateOn: 'blur'});

    this.currentRapport$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id: 0,
        nomTechnicien: formValue.nomTechnicien,
        nomClient: formValue.nomClient,
        adresseClient: formValue.adresseClient,
        marqueModeleChaudiere: formValue.marqueModeleChaudiere,
        dateMiseEnService: formValue.dateMiseEnService,
        dateIntervention: formValue.dateIntervention,
        numeroSerie: formValue.numeroSerie,
        descriptionIntervention: formValue.descriptionIntervention,
        tempsPasse: formValue.tempsPasse
      }
    )));
  }

}

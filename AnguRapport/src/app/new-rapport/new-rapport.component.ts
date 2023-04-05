import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { rapport } from '../models/rapport';
import { Observable, map, pipe, tap } from 'rxjs';
import { RapportsService } from '../services/rapports.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-new-rapport',
  templateUrl: './new-rapport.component.html',
  styleUrls: ['./new-rapport.component.scss']
})
export class NewRapportComponent implements OnInit {
  currentRapport$!: Observable<rapport>;

  formulaire!: FormGroup;

  constructor(private formBuilder: FormBuilder, private rapportService:RapportsService, private router: Router) { }

  ngOnInit(): void {

    this.formulaire = this.formBuilder.group({
      nomTechnicien: [null, [Validators.required, Validators.minLength(3)]],
      nomClient: [null, [Validators.required, Validators.minLength(3)]],
      adresseClient: [null, [Validators.required, Validators.minLength(3)]],
      marqueModeleChaudiere: [null, [Validators.required, Validators.minLength(3)]],
      dateMiseEnService: [null, [Validators.required, Validators.minLength(3)]],
      dateIntervention: [null, [Validators.required, Validators.minLength(3)]],
      numeroSerie: [null, [Validators.required, Validators.minLength(1)]],
      descriptionIntervention: [null, [Validators.required, Validators.minLength(3)]],
      tempsPasse: [null, [Validators.required, Validators.minLength(1)]]
    }
      , { updateOn: 'blur' });

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

  onSubmitForm() {
    let newRapport: rapport = {
      id: 0,
      nomTechnicien: this.formulaire.get('nomTechnicien')?.value,
      nomClient: this.formulaire.get('nomClient')?.value,
      adresseClient: this.formulaire.get('adresseClient')?.value,
      marqueModeleChaudiere: this.formulaire.get('marqueModeleChaudiere')?.value,
      dateMiseEnService: this.formulaire.get('dateMiseEnService')?.value,
      dateIntervention: this.formulaire.get('dateIntervention')?.value,
      numeroSerie: this.formulaire.get('numeroSerie')?.value,
      descriptionIntervention: this.formulaire.get('descriptionIntervention')?.value,
      tempsPasse: this.formulaire.get('tempsPasse')?.value
    };

    this.rapportService.addRapport(newRapport).pipe(
      tap(() => this.router.navigateByUrl('/releves'))
    ).subscribe();
  }
}

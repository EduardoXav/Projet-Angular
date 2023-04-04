export class rapport {
    id!: number;
    nomTechnicien!: string;
    nomClient!: string;
    adresseClient!: string;
    marqueModeleChaudiere!: string;
    dateMiseEnService!: Date;
    dateIntervention!: Date;
    numeroSerie!: string;
    descriptionIntervention!: string;
    tempsPasse!: number;

    constructor(nomTechnicien: string, nomClient: string, adresseClient: string, marqueModeleChaudiere: string, dateMiseEnService: Date, dateIntervention: Date, numeroSerie: string, descriptionIntervention: string, tempsPasse: number) {
        this.nomTechnicien = nomTechnicien;
        this.nomClient = nomClient;
        this.adresseClient = adresseClient;
        this.marqueModeleChaudiere = marqueModeleChaudiere;
        this.dateMiseEnService = dateMiseEnService;
        this.dateIntervention = dateIntervention;
        this.numeroSerie = numeroSerie;
        this.descriptionIntervention = descriptionIntervention;
        this.tempsPasse = tempsPasse;
    }
}
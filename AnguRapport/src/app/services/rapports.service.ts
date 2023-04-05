import { Injectable } from '@angular/core';
import { rapport } from '../models/rapport';
import { HttpClient } from '@angular/common/http';
import { Observable, map, switchMap } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RapportsService {

  constructor(private http : HttpClient) { }

  getAllRapports(): Observable<rapport[]> {
    return this.http.get<rapport[]>('http://localhost:3000/rapport');
  }

  getRapportsById(id: number): Observable<rapport> {
    const rapport = this.http.get<rapport>('http://localhost:3000/rapport/' + id);
    if(rapport === undefined){
      throw new Error('Rapport introuvable');
    } else {
      return rapport;
    }
  }

  addRapport(rapport: rapport): Observable<rapport> {
    return this.http.post<rapport>('http://localhost:3000/rapport/', rapport);
  }

  AddRapport(rapport: rapport): Observable<rapport> {
    return this.getAllRapports().pipe(
      map(rapports => [...rapports].sort((a, b) => a.id - b.id)),
      map(rapports_tries => rapports_tries[rapports_tries.length - 1]),
      map(rapport_max => (rapport.id = rapport_max.id + 1)),
      switchMap(() => this.http.post<rapport>('http://localhost:3000/rapport/', rapport)))
  }
}

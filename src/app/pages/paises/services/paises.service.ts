import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private url: string = 'https://restcountries.com/v3.1';

  get httpParamas() {
    return new HttpParams()
      .set('fields', 'name,capital,population,altSpellings,flags');
  }

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Pais[]> {
    const apiUrl = `${this.url}/name/${termino}`;
    return this.http.get<Pais[]>(apiUrl, { params: this.httpParamas });
  }

  // buscarCapital(termino: string): Observable<Pais[]> {
  //   const apiUrl = `${this.url}/capital/${termino}`;
  //   return this.http.get<Pais[]>(apiUrl, { params: this.httpParamas });
  // }

  buscarPaisPorID(id: string): Observable<Pais[]> {
    const apiUrl = `${this.url}/alpha/${id}`;
    return this.http.get<Pais[]>(apiUrl);
  }

  buscarPaisRegion(region: string): Observable<Pais[]> {
    const apiUrl = `${this.url}/region/${region}`
    return this.http.get<Pais[]>(apiUrl, { params: this.httpParamas })
      .pipe(
    );
  }
}

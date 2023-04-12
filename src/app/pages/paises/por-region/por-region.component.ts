import { Component, ViewChild, ElementRef } from '@angular/core';
import { Pais } from '../interfaces/pais.interfaces';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent {
  regiones: string[] = ['europe', 'asia', 'america', 'africa', 'oceania',];
  error: boolean = false;
  regionActiva: string = '';

  paises: Pais[] = [];

  termino: string = '';
  public paisesSugeridos: Pais[] = [];
  mostrarSugerencias: boolean = false;

  @ViewChild('txtTermino') txtTermino!: ElementRef<HTMLInputElement>;

  constructor(private paisService: PaisesService) {
    
  }

  getClaseCSS(region: string) {
    return (region === this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion(region: string) {
    this.regionActiva = region;
    this.paisService.buscarPaisRegion(region)
    .subscribe( resp=>{
      this.error = false;
      this.paises = resp;
    }, (err) => {
      this.error = true;
      this.paises = [];
    });
    
  }
  Buscar(termino: string) {
    this.mostrarSugerencias = false;
    this.error = false;
    this.termino = termino;
    this.regionActiva = termino;
    this.paisService.buscarPais(this.termino)
      .subscribe(resp => {
        this.paises = resp;
      }, (err) => {
        this.error = true;
        this.paises = [];
      })
  }

  sugerencias(termino: string) {
    this.mostrarSugerencias = true;
    this.termino = termino;
    this.error = false;
    this.paisService.buscarPais(termino)
      .subscribe(resp => {
        this.paisesSugeridos = resp.splice(0, 5)
      }, (err) => { this.paisesSugeridos = [] })
  }

  buscarSugerido(termino: string) {
    this.Buscar(termino);
  }
}

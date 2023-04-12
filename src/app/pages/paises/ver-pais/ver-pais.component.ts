import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Pais } from '../interfaces/pais.interfaces';
import { PaisesService } from '../services/paises.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent {
  pais!: Pais;
  error: boolean = false;
  constructor(private activateRoute: ActivatedRoute,
              private paisService: PaisesService) { }

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap( ({ codigoPais }) => this.paisService.buscarPaisPorID(codigoPais) )
    )
    .subscribe( pais => {
      console.log(pais);
      if (pais.length > 0) {
        this.pais = pais[0];
      }
      
    }, (err) => {
      this.error = true;
    })

    // this.activateRoute.params
    //   .subscribe( ({ codigoPais }) => {
        
    //     this.paisService.buscarPaisPorID(codigoPais)
    //     .subscribe( param => console.log(param) );
    //   })
  }
}

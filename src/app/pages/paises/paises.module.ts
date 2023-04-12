import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorRegionComponent } from './por-region/por-region.component';
import { VerPaisComponent } from './ver-pais/ver-pais.component';
import { TablaPaisComponent } from '../components/tabla-pais/tabla-pais.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BuscarPaisComponent } from '../components/buscar-pais/buscar-pais.component';



@NgModule({
  declarations: [
    PorRegionComponent,
    VerPaisComponent,    
    TablaPaisComponent,
    BuscarPaisComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    VerPaisComponent,
    PorRegionComponent
  ]
})
export class PaisesModule { }

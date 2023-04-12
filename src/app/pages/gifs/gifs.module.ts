import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { BuscarComponent } from './buscar/buscar.component';
import { ImagenesComponent } from './imagenes/imagenes.component';

@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    BuscarComponent,
    ImagenesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PaginaPrincipalComponent
  ]
})
export class GifsModule { }

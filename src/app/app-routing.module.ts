import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './pages/gifs/pagina-principal/pagina-principal.component';
import { PorRegionComponent } from './pages/paises/por-region/por-region.component';
import { VerPaisComponent } from './pages/paises/ver-pais/ver-pais.component';

const routes: Routes = [
  {
    path: 'Gifs',
    component: PaginaPrincipalComponent
  },
  {
    path: 'Paises',
    component: PorRegionComponent
  },
  {
    path: 'pais/:codigoPais',
    component: VerPaisComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
